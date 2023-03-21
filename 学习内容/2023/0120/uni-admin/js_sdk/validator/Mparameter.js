// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "title": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "名称",
    "label": "名称"
  },
  "configurationParameter": {
    "rules": [
      {
        "format": "array"
      }
    ],
    "title": "配置",
    "label": "配置"
  },
  "screenMeasurement": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "屏尺寸",
    "label": "屏尺寸"
  },
  "screenMaterial": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "OLED",
            "value": "0.8"
          },
          {
            "text": "LCD",
            "value": "1"
          }
        ]
      }
    ],
    "title": "材质",
    "label": "材质"
  },
  "screenSupplier": {
    "rules": [
      {
        "format": "array"
      },
      {
        "range": [
          {
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
        ]
      }
    ],
    "title": "屏厂",
    "defaultValue": [
      0
    ],
    "label": "屏厂"
  },
  "screenX": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "横向",
    "label": "横向"
  },
  "screenY": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "纵向",
    "label": "纵向"
  },
  "screenPPI": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "PPI",
    "label": "PPI"
  },
  "screenRenovate": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "刷新率",
    "defaultValue": "120",
    "label": "刷新率"
  },
  "screenSampling": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "采用率",
    "defaultValue": "240",
    "label": "采用率"
  },
  "screenDimming": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
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
        ]
      }
    ],
    "title": "调光",
    "defaultValue": 1,
    "label": "调光"
  },
  "screenPwm": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "频率",
    "label": "频率"
  },
  "screenLuminance": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "亮度",
    "defaultValue": 1200,
    "label": "亮度"
  },
  "screenColor": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "色彩",
    "defaultValue": 8,
    "label": "色彩"
  },
  "screenAdd": {
    "rules": [
      {
        "format": "array"
      },
      {
        "range": [
          {
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
        ]
      }
    ],
    "title": "附加功能",
    "defaultValue": [
      0
    ],
    "label": "附加功能"
  },
  "screenAdmin": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "情感分",
    "defaultValue": 0,
    "label": "情感分"
  },
  "AppearanceDesign": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "外观",
    "label": "外观"
  },
  "Camera": {
    "rules": [
      {
        "format": "array"
      }
    ],
    "title": "相机",
    "label": "相机"
  },
  "socfunction": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "芯片",
    "label": "芯片"
  },
  "ram": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "内存",
    "defaultValue": "LPDDR 5",
    "label": "内存"
  },
  "rom": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "闪存",
    "defaultValue": "USF 3.1",
    "label": "闪存"
  },
  "cell": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "电池",
    "defaultValue": 5000,
    "label": "电池"
  },
  "WiredCharging": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "有线充",
    "defaultValue": 65,
    "label": "有线充"
  },
  "WirelessCharging": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "无线充",
    "defaultValue": 50,
    "label": "无线充"
  },
  "ReverseCharging": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "反充",
    "defaultValue": 10,
    "label": "反充"
  },
  "measurementHight": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "高度",
    "defaultValue": "170",
    "label": "高度"
  },
  "measurementWidth": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "宽度",
    "defaultValue": "70",
    "label": "宽度"
  },
  "measurementThickness": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "厚度",
    "defaultValue": "7.9",
    "label": "厚度"
  },
  "weight": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "重量",
    "defaultValue": "200.00",
    "label": "重量"
  },
  "cheek": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "塑料",
            "value": 1
          },
          {
            "text": "金属",
            "value": 2
          }
        ]
      }
    ],
    "title": "边框",
    "defaultValue": 1,
    "label": "边框"
  },
  "backCover": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
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
        ]
      }
    ],
    "title": "后盖",
    "defaultValue": 1,
    "label": "后盖"
  },
  "system": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "系统",
    "label": "系统"
  },
  "fingerprintIdentification": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
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
        ]
      }
    ],
    "title": "指纹",
    "defaultValue": 1,
    "label": "指纹"
  },
  "motor": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
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
        ]
      }
    ],
    "title": "马达",
    "defaultValue": 1,
    "label": "马达"
  },
  "AdditionalExperience": {
    "rules": [
      {
        "format": "array"
      },
      {
        "range": [
          {
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
      }
    ],
    "title": "其他",
    "defaultValue": [
      1,
      2,
      3
    ],
    "label": "其他"
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

const enumConverter = {
  "screenMaterial_valuetotext": {
    "1": "LCD",
    "0.8": "OLED"
  },
  "screenSupplier_valuetotext": [
    {
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
  "screenDimming_valuetotext": {
    "1": "DC调光",
    "2": "类DC调光",
    "3": "PWM调光"
  },
  "screenAdd_valuetotext": [
    {
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
  "cheek_valuetotext": {
    "1": "塑料",
    "2": "金属"
  },
  "backCover_valuetotext": {
    "1": "塑料",
    "2": "陶瓷"
  },
  "fingerprintIdentification_valuetotext": {
    "1": "短焦·光学·屏下指纹",
    "2": "超薄·光学·屏下指纹",
    "3": "侧边·实体指纹",
    "4": "背部·实体指纹",
    "5": "无指纹识别"
  },
  "motor_valuetotext": {
    "1": "X轴·线性马达",
    "2": "Z轴·线性马达",
    "3": "转子马达"
  },
  "AdditionalExperience_valuetotext": [
    {
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
}

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
