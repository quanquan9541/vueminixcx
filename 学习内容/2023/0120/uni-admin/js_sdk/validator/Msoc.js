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
  "socvalue": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "title": "性能",
    "label": "性能"
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
  "type": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "类型",
    "label": "类型"
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
