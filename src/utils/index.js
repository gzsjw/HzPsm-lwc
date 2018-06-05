import moment from 'moment'
import numeral from 'numeral'

moment.locale('zh-cn')
// console.log(moment.locale())

export default {
  localmoment: moment,

  currentyear () {
    return this.localmoment().format('Y')
  },

  currentmonth () {
    return this.localmoment().format('M')
  },

  currentday () {
    return this.localmoment().format('D')
  },

  today () {
    return this.localmoment().format('LL')
  },

  hasFuncNodeAuthority (store, funcnode) {
    var authorizedFuncNodes = store.state.authorizedFuncNodes
    if (!this.isNullOrUndefinedOrEmpty(authorizedFuncNodes)) {
      if (authorizedFuncNodes.indexOf(funcnode) > -1) {
        return true
      }
    }
    return false
  },

  logout (store, router) {
    store.commit('SET_ISAUTHORITY', false)
    store.commit('SET_USER', null)
    store.commit('SET_AUTHORIZEDFUNCNODES', [])

    if (window.localStorage) {
      window.localStorage.setItem('userCode', null)
    }

    router.push('/login')
  },

  isNullOrUndefined (value) {
    return ((value === null) || (value === undefined) || (value === ''))
  },

  isNullOrUndefinedOrEmpty (value) {
    return ((value === null) || (value === undefined) || (value.length === 0))
  },

  clone (obj) {
    var copy
    // Handle the 3 simple types, and null or undefined
    if (obj == null || (typeof obj) !== 'object') return obj
    // Handle Date
    if (obj instanceof Date) {
      copy = new Date()
      copy.setTime(obj.getTime())
      return copy
    }
    // Handle Array
    if (obj instanceof Array) {
      copy = []
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.clone(obj[i])
      }
      return copy
    }
    // Handle Object
    if (obj instanceof Object) {
      copy = {}
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr])
      }
      return copy
    }
    throw new Error("Unable to copy obj! Its type isn't supported.")
  },

  getTableRowSummaries (param, sumpropertys) {
    const { columns, data } = param
    const sums = []
    columns.forEach((column, index) => {
      if (index === 0) {
        sums[index] = '合计'
        return
      } else if (sumpropertys.indexOf(column.property) < 0) {
        sums[index] = ''
        return
      }
      const values = data.map(item => Number(item[column.property]))
      if (!values.every(value => isNaN(value))) {
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
        sums[index] = this.formatMoneyFromValue(sums[index]) + '元'
      } else {
        sums[index] = ''
      }
    })
    return sums
  },

  formatMoneyFromValue (value) {
    return numeral(value).format('0,0.00')
  },

  translateMoneyFromString (strvalue) {
    return numeral(strvalue).value()
  },

  formatValueToPercentage (value) {
    return numeral(value).format('0.000%')
  }

}
