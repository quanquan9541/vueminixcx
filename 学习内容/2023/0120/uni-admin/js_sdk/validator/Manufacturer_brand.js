// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "z_id": {
    "rules": [
      {
        "format": "object"
      }
    ],
    "title": "厂商",
    "label": "厂商"
  },
  "parent_id": {
    "rules": [
      {
        "format": "object"
      }
    ],
    "title": "品牌",
    "label": "品牌"
  },
  "name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "名称",
    "label": "名称"
  },
  "pic": {
    "rules": [
      {
        "format": "array"
      },
      {
        "arrayType": "file"
      }
    ],
    "title": "大图",
    "defaultValue": "上传手机大图",
    "label": "大图"
  },
  "url": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "链接",
    "label": "链接"
  },
  "jdurl": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "京东链接",
    "label": "京东链接"
  },
  "money": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "价格",
    "label": "价格"
  },
  "moneyCheck": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "补正价",
    "defaultValue": 0,
    "label": "补正价"
  },
  "brith": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "title": "发售日期",
    "label": "发售日期"
  },
  "hot": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "title": "热门",
    "defaultValue": false,
    "label": "热门"
  },
  "status": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "title": "启用",
    "defaultValue": true,
    "label": "启用"
  },
  "last_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    }
  }
}

const enumConverter = {}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
