// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "age": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 10,
        "maximum": 999
      }
    ],
    "title": "年龄",
    "label": "年龄"
  },
  "sex": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "女",
            "value": 0
          },
          {
            "text": "男",
            "value": 1
          }
        ]
      }
    ],
    "title": "性别",
    "label": "性别"
  },
  "phonebrand": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "品牌",
    "label": "品牌"
  },
  "ram": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 4,
            "text": 4
          },
          {
            "value": 6,
            "text": 6
          },
          {
            "value": 8,
            "text": 8
          },
          {
            "value": 12,
            "text": 12
          },
          {
            "value": 16,
            "text": 16
          },
          {
            "value": 18,
            "text": 18
          },
          {
            "value": "其他",
            "text": "其他"
          }
        ]
      }
    ],
    "title": "内存",
    "label": "内存"
  },
  "rom": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 32,
            "text": 32
          },
          {
            "value": 64,
            "text": 64
          },
          {
            "value": 128,
            "text": 128
          },
          {
            "value": 256,
            "text": 256
          },
          {
            "value": 512,
            "text": 512
          },
          {
            "value": 1024,
            "text": 1024
          },
          {
            "value": "其他",
            "text": "其他"
          }
        ]
      }
    ],
    "title": "闪存",
    "label": "闪存"
  },
  "isbrand": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "无影响",
            "value": 0
          },
          {
            "text": "有影响",
            "value": 1
          }
        ]
      }
    ],
    "title": "品牌影响",
    "label": "品牌影响"
  },
  "moneymaxjiag": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 100,
        "maximum": 99999
      }
    ],
    "title": "预算",
    "label": "预算"
  },
  "ismoney": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "贵",
            "value": 0
          },
          {
            "text": "不贵",
            "value": 1
          }
        ]
      }
    ],
    "title": "金钱影响",
    "label": "金钱影响"
  },
  "import": {
    "rules": [
      {
        "format": "array"
      },
      {
        "minLength": 2,
        "maxLength": 2
      },
      {
        "range": [
          {
            "value": "屏幕显示效果",
            "text": "屏幕显示效果"
          },
          {
            "value": "影像(拍照)",
            "text": "影像(拍照)"
          },
          {
            "value": "充电速度",
            "text": "充电速度"
          },
          {
            "value": "续航/电池容量",
            "text": "续航/电池容量"
          },
          {
            "value": "重量/尺寸",
            "text": "重量/尺寸"
          },
          {
            "value": "性能",
            "text": "性能"
          }
        ]
      }
    ],
    "title": "重要",
    "label": "重要"
  },
  "screenv": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 1,
        "maximum": 99
      }
    ],
    "title": "显示",
    "defaultValue": 1,
    "label": "显示"
  },
  "camerav": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 1,
        "maximum": 99
      }
    ],
    "title": "影像",
    "defaultValue": 1,
    "label": "影像"
  },
  "fastchargev": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 1,
        "maximum": 99
      }
    ],
    "title": "快充",
    "defaultValue": 1,
    "label": "快充"
  },
  "endurancev": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 1,
        "maximum": 99
      }
    ],
    "title": "续航",
    "defaultValue": 1,
    "label": "续航"
  },
  "lightthinv": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 1,
        "maximum": 99
      }
    ],
    "title": "轻薄",
    "defaultValue": 1,
    "label": "轻薄"
  },
  "performancev": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": 1,
        "maximum": 99
      }
    ],
    "title": "性能",
    "defaultValue": 1,
    "label": "性能"
  }
}

const enumConverter = {
  "sex_valuetotext": {
    "0": "女",
    "1": "男"
  },
  "ram_valuetotext": {
    "4": 4,
    "6": 6,
    "8": 8,
    "12": 12,
    "16": 16,
    "18": 18,
    "其他": "其他"
  },
  "rom_valuetotext": {
    "32": 32,
    "64": 64,
    "128": 128,
    "256": 256,
    "512": 512,
    "1024": 1024,
    "其他": "其他"
  },
  "isbrand_valuetotext": {
    "0": "无影响",
    "1": "有影响"
  },
  "ismoney_valuetotext": {
    "0": "贵",
    "1": "不贵"
  },
  "import_valuetotext": [
    {
      "value": "屏幕显示效果",
      "text": "屏幕显示效果"
    },
    {
      "value": "影像(拍照)",
      "text": "影像(拍照)"
    },
    {
      "value": "充电速度",
      "text": "充电速度"
    },
    {
      "value": "续航/电池容量",
      "text": "续航/电池容量"
    },
    {
      "value": "重量/尺寸",
      "text": "重量/尺寸"
    },
    {
      "value": "性能",
      "text": "性能"
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
