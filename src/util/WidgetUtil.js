class WidgetUtil {

  // static SendIt(dashboardData, message, payload) {
  //   dashboardData.dashboard !== undefined &&
  //     //console.log(widgetData)
  //     dashboardData.dashboard.widgets.map((widgetRecord) => {
  //       //console.log(widgetRecord)
  //       if (widgetRecord.events != undefined) {
  //         if (widgetRecord.events[message] != undefined) {
  //           //widgetRecord.events['FirstOne']('the message')
  //           widgetRecord.events[message](payload)
  //         }
  //       }
  //     })
  // }

  static getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {return [];}
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }

  static getVar(v, key, defaultVal, functionToText) {
    var i = WidgetUtil.getIndicesOf('//' + v + ':', functionToText);
    var value = defaultVal
    if (i.length == 2) {
      value = functionToText.substring(i[0]+v.length+3, i[1]);
    }
    return value
  }



}

export default WidgetUtil