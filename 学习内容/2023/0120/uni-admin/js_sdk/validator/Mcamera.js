// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "phone_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "名称",
    "label": "名称"
  },
  "edit": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "关联",
    "label": "关联"
  },
  "ComeraType": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "前置",
            "value": "前置"
          },
          {
            "text": "主摄",
            "value": "主摄"
          },
          {
            "text": "广角",
            "value": "广角"
          },
          {
            "text": "长焦",
            "value": "长焦"
          },
          {
            "text": "人像",
            "value": "人像"
          },
          {
            "text": "微距",
            "value": "微距"
          },
          {
            "text": "景深",
            "value": "景深"
          },
          {
            "text": "其他",
            "value": "其他"
          }
        ]
      }
    ],
    "title": "类型",
    "label": "类型"
  },
  "Comeraedit": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "详情",
    "label": "详情"
  },
  "Comeravalue": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ],
    "title": "数值",
    "label": "数值"
  },
  "Comeraadd": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "附加分",
    "defaultValue": 0,
    "label": "附加分"
  },
  "sort": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "排序",
    "defaultValue": 0,
    "label": "排序"
  }
}

const enumConverter = {
  "ComeraType_valuetotext": {
    "前置": "前置",
    "主摄": "主摄",
    "广角": "广角",
    "长焦": "长焦",
    "人像": "人像",
    "微距": "微距",
    "景深": "景深",
    "其他": "其他"
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
