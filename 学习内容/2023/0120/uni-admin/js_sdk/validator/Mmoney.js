// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "edit_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "名称",
    "label": "名称"
  },
  "ram": {
    "rules": [
      {
        "required": true
      },
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
        "required": true
      },
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
          }
        ]
      }
    ],
    "title": "闪存",
    "label": "闪存"
  },
  "money": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "价格",
    "label": "价格"
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
  "ram_valuetotext": {
    "4": 4,
    "6": 6,
    "8": 8,
    "12": 12,
    "16": 16,
    "18": 18
  },
  "rom_valuetotext": {
    "32": 32,
    "64": 64,
    "128": 128,
    "256": 256,
    "512": 512,
    "1024": 1024
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
