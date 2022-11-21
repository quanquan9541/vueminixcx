// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "money": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "月薪"
  },
  "date": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "月工作"
  },
  "time": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "工时"
  },
  "gowork": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "摸鱼时长"
  },
  "education": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "专科及以下",
            "value": 0.8
          },
          {
            "text": "本科",
            "value": 1
          },
          {
            "text": "211/985本科",
            "value": 1.2
          },
          {
            "text": "硕士研究生",
            "value": 1.4
          },
          {
            "text": "211/985硕士",
            "value": 1.6
          },
          {
            "text": "博士研究生",
            "value": 1.8
          },
          {
            "text": "211/985研究生",
            "value": 2
          }
        ]
      }
    ],
    "defaultValue": 1,
    "label": "学历"
  },
  "environment": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "偏僻地区",
            "value": 0.8
          },
          {
            "text": "工厂/户外",
            "value": 0.9
          },
          {
            "text": "普通办公室",
            "value": 1
          },
          {
            "text": "体制",
            "value": 1.1
          }
        ]
      }
    ],
    "defaultValue": 1,
    "label": "工作环境"
  },
  "sex": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "异性"
  },
  "ssex": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "同性"
  },
  "colleague": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "SB占多数",
            "value": 0.9
          },
          {
            "text": "普通占多数",
            "value": 1
          },
          {
            "text": "优秀占多数",
            "value": 1.1
          }
        ]
      }
    ],
    "defaultValue": 1,
    "label": "同事质量"
  },
  "occupation": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "无要求",
            "value": 1
          },
          {
            "text": "门槛水平",
            "value": 1.05
          },
          {
            "text": "优秀水平",
            "value": 1.1
          },
          {
            "text": "资深水平",
            "value": 1.15
          }
        ]
      }
    ],
    "defaultValue": 1,
    "label": "职业资格"
  },
  "special": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "正常",
            "value": 1
          },
          {
            "text": "8：30前上班",
            "value": 0.95
          },
          {
            "text": "夜班",
            "value": 0.9
          }
        ]
      }
    ],
    "defaultValue": 1,
    "label": "工作特殊"
  }
}

const enumConverter = {
  "education_valuetotext": {
    "1": "本科",
    "2": "211/985研究生",
    "0.8": "专科及以下",
    "1.2": "211/985本科",
    "1.4": "硕士研究生",
    "1.6": "211/985硕士",
    "1.8": "博士研究生"
  },
  "environment_valuetotext": {
    "1": "普通办公室",
    "0.8": "偏僻地区",
    "0.9": "工厂/户外",
    "1.1": "体制"
  },
  "colleague_valuetotext": {
    "1": "普通占多数",
    "0.9": "SB占多数",
    "1.1": "优秀占多数"
  },
  "occupation_valuetotext": {
    "1": "无要求",
    "1.05": "门槛水平",
    "1.1": "优秀水平",
    "1.15": "资深水平"
  },
  "special_valuetotext": {
    "1": "正常",
    "0.95": "8：30前上班",
    "0.9": "夜班"
  }
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
