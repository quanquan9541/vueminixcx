<template>
  <view>
    <view class="uni-header">
      <view class="uni-group">
        <view class="uni-title"></view>
        <view class="uni-sub-title"></view>
      </view>
      <view class="uni-group">
        <input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
        <button class="uni-button" type="default" size="mini" @click="search">搜索</button>
        <button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增</button>
        <button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length"
          @click="delTable">批量删除</button>
        <download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData"
          :type="exportExcel.type" :name="exportExcel.filename">
          <button class="uni-button" type="primary" size="mini">导出 Excel</button>
        </download-excel>
      </view>
    </view>
    <view class="uni-container">
      <unicloud-db ref="udb" :collection="collectionList" :where="where" page-data="replace" :orderby="orderby"
        :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual"
        @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection"
          @selection-change="selectionChange">
          <uni-tr>
            <uni-th align="center">名称</uni-th>
            <uni-th align="center" sortable @sort-change="sortChange($event, 'configurationParameter')">配置</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'screenMeasurement')"
              sortable @sort-change="sortChange($event, 'screenMeasurement')">屏尺寸</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.screenMaterial_localdata"
              @filter-change="filterChange($event, 'screenMaterial')">材质</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.screenSupplier_localdata"
              @filter-change="filterChange($event, 'screenSupplier')">屏厂</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'screenX')" sortable
              @sort-change="sortChange($event, 'screenX')">横向</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'screenY')" sortable
              @sort-change="sortChange($event, 'screenY')">纵向</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'screenPPI')" sortable
              @sort-change="sortChange($event, 'screenPPI')">PPI</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'screenRenovate')" sortable
              @sort-change="sortChange($event, 'screenRenovate')">刷新率</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'screenSampling')" sortable
              @sort-change="sortChange($event, 'screenSampling')">采用率</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.screenDimming_localdata"
              @filter-change="filterChange($event, 'screenDimming')">调光</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'screenPwm')" sortable
              @sort-change="sortChange($event, 'screenPwm')">频率</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'screenLuminance')" sortable
              @sort-change="sortChange($event, 'screenLuminance')">亮度</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'screenColor')" sortable
              @sort-change="sortChange($event, 'screenColor')">色彩</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.screenAdd_localdata"
              @filter-change="filterChange($event, 'screenAdd')">附加功能</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'screenAdmin')" sortable
              @sort-change="sortChange($event, 'screenAdmin')">情感分</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'AppearanceDesign')"
              sortable @sort-change="sortChange($event, 'AppearanceDesign')">外观</uni-th>
            <uni-th align="center" sortable @sort-change="sortChange($event, 'Camera')">相机</uni-th>
            <uni-th align="center">芯片</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'ram')" sortable
              @sort-change="sortChange($event, 'ram')">内存</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'rom')" sortable
              @sort-change="sortChange($event, 'rom')">闪存</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'cell')" sortable
              @sort-change="sortChange($event, 'cell')">电池</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'WiredCharging')" sortable
              @sort-change="sortChange($event, 'WiredCharging')">有线充</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'WirelessCharging')"
              sortable @sort-change="sortChange($event, 'WirelessCharging')">无线充</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'ReverseCharging')" sortable
              @sort-change="sortChange($event, 'ReverseCharging')">反充</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'measurementHight')"
              sortable @sort-change="sortChange($event, 'measurementHight')">高度</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'measurementWidth')"
              sortable @sort-change="sortChange($event, 'measurementWidth')">宽度</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'measurementThickness')"
              sortable @sort-change="sortChange($event, 'measurementThickness')">厚度</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'weight')" sortable
              @sort-change="sortChange($event, 'weight')">重量</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.cheek_localdata"
              @filter-change="filterChange($event, 'cheek')">边框</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.backCover_localdata"
              @filter-change="filterChange($event, 'backCover')">后盖</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'system')" sortable
              @sort-change="sortChange($event, 'system')">系统</uni-th>
            <uni-th align="center" filter-type="select"
              :filter-data="options.filterData.fingerprintIdentification_localdata"
              @filter-change="filterChange($event, 'fingerprintIdentification')">指纹</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.motor_localdata"
              @filter-change="filterChange($event, 'motor')">马达</uni-th>
            <uni-th align="center" filter-type="select" :filter-data="options.filterData.AdditionalExperience_localdata"
              @filter-change="filterChange($event, 'AdditionalExperience')">其他</uni-th>
            <uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
            <uni-td align="center">
              {{item.title && item.title[0] && item.title[0].parent_id.text+"&#160"+item.title[0].text}}
            </uni-td>
            <uni-td align="center">
              {{item.configurationParameter[0].ram+'GB+'+item.configurationParameter[0].rom+'GB&#160'+item.configurationParameter[0].money}}
            </uni-td>
            <uni-td align="center">{{item.screenMeasurement}}</uni-td>
            <uni-td align="center">{{options.screenMaterial_valuetotext[item.screenMaterial]}}</uni-td>
            <uni-td align="center">
              <uni-data-picker :localdata="options.screenSupplier_valuetotext" :value="item.screenSupplier"
                :border="false" :readonly="true" split=","></uni-data-picker>
            </uni-td>
            <uni-td align="center">{{item.screenX}}</uni-td>
            <uni-td align="center">{{item.screenY}}</uni-td>
            <uni-td align="center">{{item.screenPPI}}</uni-td>
            <uni-td align="center">{{item.screenRenovate}}</uni-td>
            <uni-td align="center">{{item.screenSampling}}</uni-td>
            <uni-td align="center">{{options.screenDimming_valuetotext[item.screenDimming]}}</uni-td>
            <uni-td align="center">{{item.screenPwm}}</uni-td>
            <uni-td align="center">{{item.screenLuminance}}</uni-td>
            <uni-td align="center">{{item.screenColor}}</uni-td>
            <uni-td align="center">
              <uni-data-picker :localdata="options.screenAdd_valuetotext" :value="item.screenAdd" :border="false"
                :readonly="true" split=","></uni-data-picker>
            </uni-td>
            <uni-td align="center">{{item.screenAdmin}}</uni-td>
            <uni-td align="center">{{item.AppearanceDesign}}</uni-td>
            <uni-td align="center">点击查看详情</uni-td>
            <uni-td align="center">
              {{item.socfunction && item.socfunction[0] && item.socfunction[0].parent_id.text+"&#160"+item.socfunction[0].text}}
            </uni-td>
            <uni-td align="center">{{item.ram}}</uni-td>
            <uni-td align="center">{{item.rom}}</uni-td>
            <uni-td align="center">{{item.cell}}</uni-td>
            <uni-td align="center">{{item.WiredCharging}}</uni-td>
            <uni-td align="center">{{item.WirelessCharging}}</uni-td>
            <uni-td align="center">{{item.ReverseCharging}}</uni-td>
            <uni-td align="center">{{item.measurementHight}}</uni-td>
            <uni-td align="center">{{item.measurementWidth}}</uni-td>
            <uni-td align="center">{{item.measurementThickness}}</uni-td>
            <uni-td align="center">{{item.weight}}</uni-td>
            <uni-td align="center">{{options.cheek_valuetotext[item.cheek]}}</uni-td>
            <uni-td align="center">{{options.backCover_valuetotext[item.backCover]}}</uni-td>
            <uni-td align="center">{{item.system}}</uni-td>
            <uni-td align="center">{{options.fingerprintIdentification_valuetotext[item.fingerprintIdentification]}}
            </uni-td>
            <uni-td align="center">{{options.motor_valuetotext[item.motor]}}</uni-td>
            <uni-td align="center">
              <uni-data-picker :localdata="options.AdditionalExperience_valuetotext" :value="item.AdditionalExperience"
                :border="false" :readonly="true" split=","></uni-data-picker>
            </uni-td>
            <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini"
                  type="primary">修改</button>
                <button @click="confirmDelete(item._id)" class="uni-button" size="mini" type="warn">删除</button>
              </view>
            </uni-td>
          </uni-tr>
        </uni-table>
        <view class="uni-pagination-box">
          <uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current" :total="pagination.count"
            @change="onPageChanged" />
        </view>
      </unicloud-db>
    </view>
  </view>
</template>

<script>
  import {
    gettreedata
  } from '../../js/tools.js';
  import {
    enumConverter,
    filterToWhere
  } from '../../js_sdk/validator/Mparameter.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = [] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
  // 分页配置
  const pageSize = 20
  const pageCurrent = 1

  const orderByMapping = {
    "ascending": "asc",
    "descending": "desc"
  }

  export default {
    data() {
      return {
        collectionList: [db.collection('Mparameter').field(
            'title,configurationParameter,screenMeasurement,screenMaterial,screenSupplier,screenX,screenY,screenPPI,screenRenovate,screenSampling,screenDimming,screenPwm,screenLuminance,screenColor,screenAdd,screenAdmin,AppearanceDesign,Camera,socfunction,ram,rom,cell,WiredCharging,WirelessCharging,ReverseCharging,measurementHight,measurementWidth,measurementThickness,weight,cheek,backCover,system,fingerprintIdentification,motor,AdditionalExperience,last_date'
          ).getTemp(), db.collection('Manufacturer_brand').field('_id,parent_id,z_id, name as text').getTemp(), db
          .collection(
            'Msoc').field('_id,parent_id,z_id, name as text').getTemp()
        ],
        query: '',
        where: '',
        orderby: dbOrderBy,
        orderByFieldName: "",
        selectedIndexs: [],
        options: {
          pageSize,
          pageCurrent,
          filterData: {
            "screenMaterial_localdata": [{
                "text": "OLED",
                "value": "0.8"
              },
              {
                "text": "LCD",
                "value": "1"
              }
            ],
            "screenSupplier_localdata": [{
                "text": "三星",
                "value": 0
              },
              {
                "text": "华星光电",
                "value": 1
              },
              {
                "text": "京东方",
                "value": 2
              },
              {
                "text": "天马",
                "value": 3
              },
              {
                "text": "维信诺",
                "value": 4
              },
              {
                "text": "柔宇",
                "value": 5
              },
              {
                "text": "未知",
                "value": 9
              }
            ],
            "screenDimming_localdata": [{
                "text": "DC调光",
                "value": 1
              },
              {
                "text": "类DC调光",
                "value": 2
              },
              {
                "text": "PWM调光",
                "value": 3
              }
            ],
            "screenAdd_localdata": [{
                "text": "DCI-P3",
                "value": 0
              },
              {
                "text": "HDR10",
                "value": 1
              },
              {
                "text": "HDR10+",
                "value": 2
              }
            ],
            "cheek_localdata": [{
                "text": "塑料",
                "value": 1
              },
              {
                "text": "金属",
                "value": 2
              }
            ],
            "backCover_localdata": [{
                "text": "塑料",
                "value": 1
              },
              {
                "text": "玻璃",
                "value": 2
              },
              {
                "text": "陶瓷",
                "value": 2
              }
            ],
            "fingerprintIdentification_localdata": [{
                "text": "短焦·光学·屏下指纹",
                "value": 1
              },
              {
                "text": "超薄·光学·屏下指纹",
                "value": 2
              },
              {
                "text": "侧边·实体指纹",
                "value": 3
              },
              {
                "text": "背部·实体指纹",
                "value": 4
              },
              {
                "text": "无指纹识别",
                "value": 5
              }
            ],
            "motor_localdata": [{
                "text": "X轴·线性马达",
                "value": 1
              },
              {
                "text": "Z轴·线性马达",
                "value": 2
              },
              {
                "text": "转子马达",
                "value": 3
              }
            ],
            "AdditionalExperience_localdata": [{
                "text": "双扬声器",
                "value": 1
              },
              {
                "text": "NFC",
                "value": 2
              },
              {
                "text": "WiFi6",
                "value": 3
              },
              {
                "text": "红外遥控",
                "value": 4
              },
              {
                "text": "VC液冷散热",
                "value": 5
              },
              {
                "text": "IP68防尘防水",
                "value": 6
              }
            ]
          },
          ...enumConverter
        },
        imageStyles: {
          width: 64,
          height: 64
        },
        exportExcel: {
          "filename": "Mparameter.xls",
          "type": "xls",
          "fields": {
            "名称": "title",
            "配置": "configurationParameter",
            "屏尺寸": "screenMeasurement",
            "材质": "screenMaterial",
            "屏厂": "screenSupplier",
            "横向": "screenX",
            "纵向": "screenY",
            "PPI": "screenPPI",
            "刷新率": "screenRenovate",
            "采用率": "screenSampling",
            "调光": "screenDimming",
            "频率": "screenPwm",
            "亮度": "screenLuminance",
            "色彩": "screenColor",
            "附加功能": "screenAdd",
            "情感分": "screenAdmin",
            "外观": "AppearanceDesign",
            "相机": "Camera",
            "芯片": "socfunction",
            "内存": "ram",
            "闪存": "rom",
            "电池": "cell",
            "有线充": "WiredCharging",
            "无线充": "WirelessCharging",
            "反充": "ReverseCharging",
            "高度": "measurementHight",
            "宽度": "measurementWidth",
            "厚度": "measurementThickness",
            "重量": "weight",
            "边框": "cheek",
            "后盖": "backCover",
            "系统": "system",
            "指纹": "fingerprintIdentification",
            "马达": "motor",
            "其他": "AdditionalExperience",
            "last_date": "last_date"
          }
        },
        exportExcelData: []
      }
    },
    onLoad() {
      this._filter = {}
    },
    onReady() {
      this.$refs.udb.loadData()
    },
    methods: {
      async getdatadata(e) {
        let Cameradata = await gettreedata(0, `edit_id=='${e}'`)
        console.log('相机', Cameradata);
        return 5
      },

      onqueryload(data) {
        this.exportExcelData = data
      },
      getWhere() {
        const query = this.query.trim()
        if (!query) {
          return ''
        }
        const queryRe = new RegExp(query, 'i')
        return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
      },
      search() {
        const newWhere = this.getWhere()
        this.where = newWhere
        this.$nextTick(() => {
          this.loadData()
        })
      },
      loadData(clear = true) {
        this.$refs.udb.loadData({
          clear
        })
      },
      onPageChanged(e) {
        this.selectedIndexs.length = 0
        this.$refs.table.clearSelection()
        this.$refs.udb.loadData({
          current: e.current
        })
      },
      navigateTo(url, clear) {
        // clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
        uni.navigateTo({
          url,
          events: {
            refreshData: () => {
              this.loadData(clear)
            }
          }
        })
      },
      // 多选处理
      selectedItems() {
        var dataList = this.$refs.udb.dataList
        return this.selectedIndexs.map(i => dataList[i]._id)
      },
      // 批量删除
      delTable() {
        this.$refs.udb.remove(this.selectedItems(), {
          success: (res) => {
            this.$refs.table.clearSelection()
          }
        })
      },
      // 多选
      selectionChange(e) {
        this.selectedIndexs = e.detail.index
      },
      confirmDelete(id) {
        this.$refs.udb.remove(id, {
          success: (res) => {
            this.$refs.table.clearSelection()
          }
        })
      },
      sortChange(e, name) {
        this.orderByFieldName = name;
        if (e.order) {
          this.orderby = name + ' ' + orderByMapping[e.order]
        } else {
          this.orderby = ''
        }
        this.$refs.table.clearSelection()
        this.$nextTick(() => {
          this.$refs.udb.loadData()
        })
      },
      filterChange(e, name) {
        this._filter[name] = {
          type: e.filterType,
          value: e.filter
        }
        let newWhere = filterToWhere(this._filter, db.command)
        if (Object.keys(newWhere).length) {
          this.where = newWhere
        } else {
          this.where = ''
        }
        this.$nextTick(() => {
          this.$refs.udb.loadData()
        })
      }
    }
  }
</script>

<style>
</style>