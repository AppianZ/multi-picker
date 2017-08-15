/**
 * Created by appian on 16/8/5.
 */
(function (wid, dcm) {
  var win = wid;
  var doc = dcm;

  function $id(id) {
    return doc.getElementById(id);
  }

  function $class(name) {
    return doc.getElementsByClassName(name);
  }

  function loop(begin, length, fuc) {
    for ( var i = begin; i < length; i++ ) {
      if (fuc(i)) break;
    }
  }

  function on(action, selector, callback) {
    doc.addEventListener(action, function (e) {
      if (selector == e.target.tagName.toLowerCase() || selector == e.target.className || selector == e.target.id) {
        callback(e);
      }
    })
  }

  function DateSelector(config) {
    this.input      = config.input;
    this.container  = config.container;
    this.type       = config.type;
    this.param      = (config.type == 1) ? [1, 1, 1, 1, 1] : config.param;
    this.beginTime  = config.beginTime.map(function(t) {return Number(t)});
    this.endTime    = config.endTime.map(function(t) {return Number(t)});
    this.recentTime = config.recentTime.map(function(t) {return Number(t)});
    this.success    = config.success;

    this.ulCount     = 0;
    this.ulDomArr    = [];
    this.idxArr      = [];
    this.liHeight    = wid.lib ? Number(doc.getElementsByTagName('HTML')[0].style.fontSize.replace('px', '')) * 1 : 40;
    this.maxHeight   = [];
    this.distance    = [];
    this.start       = {
      Y: 0,
      time: ''
    };
    this.move        = {
      Y: 0,
      speed: []
    };
    this.end         = {
      Y: 0,
      index: 0
    };
    this.resultArr   = [];
    this.begin_time  = [1970, 1, 1, 0, 0];
    this.end_time    = [new Date().getFullYear() + 1, 12, 31, 23, 59];
    this.recent_time = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()];

    this.initDomFuc();
    this.initReady();
    this.initBinding();
  }

  DateSelector.prototype = {
    constructor: DateSelector,
    checkParam: function () {
      var idxArr = [];
      var _this  = this;
      loop(0, _this.param.length, function (i) {
        if (_this.param[i] > 0) {
          idxArr.push(i);
        }
      });
      this.ulCount = idxArr[idxArr.length - 1] - idxArr[0] + 1;
      loop(idxArr[0], idxArr[idxArr.length - 1] + 1, function (i) {
        _this.param[i] = 1;
        _this.idxArr.push(i);
      });
    },
    checkTime: function () {
      var _this       = this;
      var begin_time  = this.begin_time;
      var end_time    = this.end_time;
      var recent_time = this.recent_time;
      if (_this.beginTime.length == 0) {
        loop(0, _this.idxArr.length, function (i) {
          _this.beginTime.push(begin_time[_this.idxArr[i]]);
        });
      }
      if (_this.endTime.length == 0) {
        loop(0, _this.idxArr.length, function (i) {
          _this.endTime.push(end_time[_this.idxArr[i]]);
        });
      }
      if (_this.recentTime.length == 0) {
        loop(0, _this.idxArr.length, function (i) {
          _this.recentTime.push(recent_time[_this.idxArr[i]]);
        });
      }
      if (_this.idxArr.length == _this.beginTime.length && _this.beginTime.length == _this.endTime.length && _this.endTime.length == _this.recentTime.length) {
        var _idxArrIndex = 0;
        loop(0, _this.param.length, function (i) {
          if (_this.param[i] == 0) {
            switch (i) {
              case 0:
                begin_time[i] = new Date().getFullYear();
                end_time[i]   = new Date().getFullYear();
                break;
              case 1:
                begin_time[i] = new Date().getMonth() + 1;
                end_time[i]   = new Date().getMonth() + 1;
                break;
              case 2:
                begin_time[i] = new Date().getDate();
                end_time[i]   = new Date().getDate();
                break;
              case 3:
                begin_time[i] = new Date().getHours();
                end_time[i]   = new Date().getHours();
                break;
              case 4:
                begin_time[i] = new Date().getMinutes();
                end_time[i]   = new Date().getMinutes();
                break;
            }
          } else {
            switch (i) {
              case 0:
                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 1900 ? _this.beginTime[_idxArrIndex] : new Date().getFullYear();
                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 1900 ? _this.endTime[_idxArrIndex] : new Date().getFullYear() + 1;
                recent_time[i] = _this.recentTime[_idxArrIndex];
                break;
              case 1:
                _this.beginTime[_idxArrIndex] = begin_time[i] = (_this.beginTime[_idxArrIndex] > 0 && _this.beginTime[_idxArrIndex] <= 12) ? _this.beginTime[_idxArrIndex] : 1;
                _this.endTime[_idxArrIndex] = end_time[i] = (_this.endTime[_idxArrIndex] > 0 && _this.endTime[_idxArrIndex] <= 12) ? _this.endTime[_idxArrIndex] : 12;
                recent_time[i] = _this.recentTime[_idxArrIndex];
                break;
              case 2:
                _this.beginTime[_idxArrIndex] = begin_time[i] = (_this.beginTime[_idxArrIndex] > 0 && _this.beginTime[_idxArrIndex] <= new Date(begin_time[0], begin_time[1], 0).getDate()) ? _this.beginTime[_idxArrIndex] : 1;
                _this.endTime[_idxArrIndex] = end_time[i] = (_this.endTime[_idxArrIndex] > 0 && _this.endTime[_idxArrIndex] <= new Date(end_time[0], end_time[1], 0).getDate()) ? _this.endTime[_idxArrIndex] : new Date(end_time[0], end_time[1], 0).getDate();
                recent_time[i] = _this.recentTime[_idxArrIndex];
                break;
              case 3:
                _this.beginTime[_idxArrIndex] = begin_time[i] = (_this.beginTime[_idxArrIndex] >= 0 && _this.beginTime[_idxArrIndex] <= 23) ? _this.beginTime[_idxArrIndex] : 0;
                _this.endTime[_idxArrIndex] = end_time[i] = (_this.endTime[_idxArrIndex] >= 0 && _this.endTime[_idxArrIndex] <= 23) ? _this.endTime[_idxArrIndex] : 23;
                recent_time[i] = _this.recentTime[_idxArrIndex];
                break;
              case 4 :
                _this.beginTime[_idxArrIndex] = begin_time[i] = (_this.beginTime[_idxArrIndex] >= 0 && _this.beginTime[_idxArrIndex] <= 59) ? _this.beginTime[_idxArrIndex] : 0;
                _this.endTime[_idxArrIndex] = end_time[i] = (_this.endTime[_idxArrIndex] >= 0 && _this.endTime[_idxArrIndex] <= 59) ? _this.endTime[_idxArrIndex] : 59;
                recent_time[i] = _this.recentTime[_idxArrIndex];
                break;
            }
            _idxArrIndex++;
          }
        });
        var bt = new Date(begin_time[0], begin_time[1], begin_time[2], begin_time[3], begin_time[4]).getTime();
        var et = new Date(end_time[0], end_time[1], end_time[2], end_time[3], end_time[4]).getTime();
        var rt = new Date(recent_time[0], recent_time[1], recent_time[2], recent_time[3], recent_time[4]).getTime();
        rt < bt ? alert('当前时间小于开始时间') : "";
        rt > et ? alert('当前时间超过结束时间') : "";
        return (bt <= rt && rt <= et);
      } else {
        alert('error,please open the console to see the errmsg');
        console.warn('type为1时,时间数组长度为0或5');
        console.warn('构造函数的参数param或recentTime设置有误');
        console.warn('param必须是连续的1，recentTime的值必须与param中的值对应');
        console.warn('构造函数调用失败，请重新设置参数');
        return false;
      }
    },
    checkTimeArr: function (arr1, arr2, length) {
      var checkStatus = true;
      loop(0, length, function (i) {
        if (arr1[i] != arr2[i]) checkStatus = false;
      });
      return checkStatus;
    },
    initDomFuc: function () {
      var _this = this;
      this.checkParam();
      if (!this.checkTime())return;
      var html = '';
      html += '<div class="date-selector-bg" id="date-selector-bg-' + _this.container + '">' +
        '<div  class="date-selector-container" id="date-selector-container-' + _this.container + '">' +
        '<div class="date-selector-btn-box">' +
        '<div class="date-selector-btn" id="date-selector-btn-cancel">返回</div>';

      if (this.type == 1) {
        html += '<div class="date-selector-tab-box">' +
          '<div class="date-selector-tab date-selector-' + _this.container + '-tab date-selector-tab-active">年月日</div>' +
          '<div class="date-selector-tab date-selector-' + _this.container + '-tab">时分</div>' +
          '</div>';
      }

      html += '<div class="date-selector-btn" id="date-selector-btn-save-' + _this.container + '">确定</div>' +
        '</div>' +
        '<div class="date-selector-content">';

      if (_this.type == 0) {
        loop(0, _this.idxArr.length, function (i) {
          html += '<div class="date-selector date-selector-left">' +
            '<ul id="date-selector-' + _this.container + '-' + _this.idxArr[i] + '"></ul>' +
            '</div>';
        });
        html += '<div class="date-selector-up-shadow"></div>' +
          '<div class="date-selector-down-shadow"></div>' +
          '<div class="date-selector-line"></div>' +
          '</div>';
        html += '</div></div>';
        $id(_this.container).innerHTML = html;
        loop(0, _this.ulCount, function (i) {
          $id('date-selector-container-' + _this.container).querySelectorAll(".date-selector")[i].style.width = (100 / _this.ulCount).toFixed(2) + '%';
        });
      } else if (_this.type == 1) {
        html += '<div class="date-selector date-selector-left">' +
          '<ul id="date-selector-' + _this.container + '-0"></ul>' +
          '</div>' +
          '<div class="date-selector date-selector-left">' +
          '<ul id="date-selector-' + _this.container + '-1"></ul>' +
          '</div>' +
          '<div class="date-selector date-selector-left">' +
          '<ul id="date-selector-' + _this.container + '-2"></ul>' +
          '</div>' +
          '<div class="date-selector-up-shadow"></div>' +
          '<div class="date-selector-down-shadow"></div>' +
          '<div class="date-selector-line"></div>' +
          '</div>' +
          '<div class="date-selector-content date-selector-content-right">' +
          '<div class="date-selector date-selector-right">' +
          '<ul id="date-selector-' + _this.container + '-3"></ul>' +
          '</div>' +
          '<div class="date-selector date-selector-right">' +
          '<ul id="date-selector-' + _this.container + '-4"></ul>' +
          '</div>' +
          '<div class="date-selector-up-shadow"></div>' +
          '<div class="date-selector-down-shadow"></div>' +
          '<div class="date-selector-line"></div>' +
          '</div>';
        html += '</div></div>';
        $id(_this.container).innerHTML = html;
      }
    },
    initReady: function () {
      var _this   = this;
      var realIdx = 0;
      loop(0, _this.ulCount, function (i) {
        realIdx       = _this.idxArr[i];
        var min       = 0;
        var max       = 0;
        var tempDomUl = $id('date-selector-' + _this.container + '-' + _this.idxArr[i]);
        var tempArray = _this['array' + _this.idxArr[i]] = [];
        switch (realIdx) {
          case 0:
            _this.initCommonArr(tempDomUl, tempArray, _this.beginTime[i], _this.endTime[i], '年', i);
            break;
          case 1:
            min = (_this.checkTimeArr(_this.begin_time, _this.recent_time, 1)) ? _this.beginTime[i] : 1;
            max = (_this.checkTimeArr(_this.end_time, _this.recent_time, 1)) ? _this.endTime[i] : 12;
            _this.initCommonArr(tempDomUl, tempArray, min, max, '月', i);
            break;
          case 2:
            min = (_this.checkTimeArr(_this.begin_time, _this.recent_time, 2)) ? _this.beginTime[i] : 1;
            max = (_this.checkTimeArr(_this.end_time, _this.recent_time, 2)) ? _this.endTime[i] : new Date(_this.recent_time[0], _this.recent_time[1], 0).getDate();
            _this.initCommonArr(tempDomUl, tempArray, min, max, '日', i);
            break;
          case 3:
            min = (_this.checkTimeArr(_this.begin_time, _this.recent_time, 3)) ? _this.beginTime[i] : 0;
            max = (_this.checkTimeArr(_this.end_time, _this.recent_time, 3)) ? _this.endTime[i] : 23;
            _this.initCommonArr(tempDomUl, tempArray, min, max, '时', i);
            break;
          case 4 :
            min = (_this.checkTimeArr(_this.begin_time, _this.recent_time, 4)) ? _this.beginTime[i] : 0;
            max = (_this.checkTimeArr(_this.end_time, _this.recent_time, 4)) ? _this.endTime[i] : 59;
            _this.initCommonArr(tempDomUl, tempArray, min, max, '分', i);
            break;
        }
        tempDomUl.addEventListener('touchstart', function () {
          _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
        }, false);
        tempDomUl.addEventListener('touchmove', function () {
          _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
        }, false);
        tempDomUl.addEventListener('touchend', function () {
          _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
        }, true);
      });
    },
    initBinding: function () {
      var _this     = this;
      var bg        = $id('date-selector-bg-' + _this.container);
      var container = $id('date-selector-container-' + _this.container);
      var body      = doc.body;
      on('touchstart', _this.input, function () {
        bg.classList.add('date-selector-bg-up', 'date-selector-bg-delay');
        container.classList.add('date-selector-container-up');
        body.classList.add('date-selector-locked');
      }, false);

      on('touchstart', 'date-selector-btn-save-' + _this.container, function () {
        var temp = _this.resultArr.map(function (it) {
          if (it < 10) it = ('0' + it);
          return it + '';
        });
        _this.success(_this.resultArr, temp);
        bg.classList.remove('date-selector-bg-up');
        container.classList.remove('date-selector-container-up');
        setTimeout(function () {
          bg.classList.remove('date-selector-bg-delay');
        }, 350);
        body.classList.remove('date-selector-locked');
      }, false);

      on('touchstart', 'date-selector-bg-' + _this.container, function () {
        bg.classList.remove('date-selector-bg-up');
        container.classList.remove('date-selector-container-up');
        setTimeout(function () {
          bg.classList.remove('date-selector-bg-delay');
        }, 350);
        body.classList.remove('date-selector-locked');
      }, false);

      on('touchstart', 'date-selector-btn-cancel', function () {
        bg.classList.remove('date-selector-bg-up');
        container.classList.remove('date-selector-container-up');
        setTimeout(function () {
          bg.classList.remove('date-selector-bg-delay');
        }, 350);
        body.classList.remove('date-selector-locked');
      }, false);

      on('touchstart', 'date-selector-tab date-selector-' + _this.container + '-tab', function (event) {
        var tab     = container.getElementsByClassName('date-selector-tab');
        var content = container.getElementsByClassName('date-selector-content');
        loop(0, tab.length, function (i) {
          tab[i].classList.remove('date-selector-tab-active');
        });
        event.target.classList.add('date-selector-tab-active');
        if (event.target.innerHTML == '年月日') {
          content[0].classList.remove('date-selector-content-left');
          content[1].classList.add('date-selector-content-right');
        } else {
          content[0].classList.add('date-selector-content-left');
          content[1].classList.remove('date-selector-content-right');
        }
      }, false);
    },
    initCommonArr: function (tempDomUl, tempArr, min, max, str, idx) {
      var _this = this;
      var Html  = '';
      loop(min, max + 1, function (i) {
        tempArr.push(i);
      });
      _this.maxHeight.push(_this.liHeight * (max - min));
      var res = _this.recentTime[idx];
      _this.resultArr.push(res);
      tempArr.unshift('', '');
      tempArr.push('', '');
      tempDomUl.style.transform       = 'translate3d(0,-' + this.liHeight * (tempArr.indexOf(res) - 2) + 'px, 0)';
      tempDomUl.style.webkitTransform = 'translate3d(0,-' + this.liHeight * (tempArr.indexOf(res) - 2) + 'px, 0)';
      _this.distance.push(this.liHeight * (tempArr.indexOf(res) - 2));
      loop(0, tempArr.length, function (j) {
        Html += '<li>' + tempArr[j] + (tempArr[j] === '' ? '' : str) + '</li>';
      });
      tempDomUl.innerHTML = Html;
    },
    initRangeArr: function (min, max, str, checkIdx, dir) {
      var _this      = this;
      var realIdx    = _this.idxArr[checkIdx];
      var arr        = [];
      var $selector  = $id('date-selector-' + _this.container + '-' + realIdx);
      var targetLong = 0;
      loop(min, max + 1, function (k) {
        arr.push(k);
      });
      var Html = '';
      arr.unshift('', '');
      arr.push('', '');
      for ( var i = 0; i < arr.length; i++ ) {
        Html += '<li>' + arr[i] + (arr[i] === '' ? '' : str) + '</li>';
      }
      _this['array' + realIdx] = [];
      _this['array' + realIdx] = arr;
      $selector.innerHTML      = Html;

      if (dir == 0) {
        targetLong                               = min > this.resultArr[checkIdx] ? 0 : -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + this.liHeight * 2;
        this.resultArr[checkIdx]                 = this.resultArr[checkIdx] < min ? min : this.resultArr[checkIdx];
        this.recent_time[_this.idxArr[checkIdx]] = _this.resultArr[checkIdx];
      } else if (dir == 1) {
        targetLong                               = max > this.resultArr[checkIdx] ?
        -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + this.liHeight * 2 :
        -arr.indexOf(max) * this.liHeight + this.liHeight * 2;
        this.resultArr[checkIdx]                 = this.resultArr[checkIdx] > max ? max : this.resultArr[checkIdx];
        this.recent_time[_this.idxArr[checkIdx]] = _this.resultArr[checkIdx];
      } else {
        if (arr.indexOf(this.resultArr[checkIdx]) == -1) {
          targetLong = (this.maxHeight[checkIdx] > this.liHeight * (max - min)) ? -this.liHeight * (max - min) : -this.distance[checkIdx];
        } else {
          targetLong = -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + 2 * this.liHeight;
        }
        this.recent_time[realIdx] = -targetLong / this.liHeight + 1;
        this.resultArr[checkIdx]  = arr[-targetLong / this.liHeight + 2];
      }

      $selector.style.transform        = 'translate3d(0,' + targetLong + 'px, 0)';
      $selector.style.webkitTransform  = 'translate3d(0,' + targetLong + 'px, 0)';
      $selector.style.transition       = 'transform 0.15s ease-out';
      $selector.style.webkitTransition = '-webkit-transform 0.15s ease-out';
      this.maxHeight[checkIdx]         = this.liHeight * (max - min);
      this.distance[checkIdx]          = Math.abs(targetLong);
    },
    checkRange: function (checkIdx, sta) {
      var _this = this;
      if (checkIdx >= _this.ulCount - 1) return;
      var status = null;
      if (sta) status = _this.checkTimeArr(_this.begin_time, _this.resultArr, checkIdx + 1);
      else status = _this.checkTimeArr(_this.end_time, _this.resultArr, checkIdx + 1);
      if (!status) {
        var min     = 0;
        var max     = 0;
        var str     = '';
        var dir     = 0; //0在顶部,1在底部,-1在中间
        var realIdx = _this.idxArr[checkIdx];
        switch (realIdx) {
          case 0:
            min = 1;
            max = 12;
            str = '月';
            break;
          case 1:
            min = 1;
            max = new Date(_this.recent_time[0], _this.recent_time[1], 0).getDate();
            str = '日';
            break;
          case 2:
            min = 0;
            max = 23;
            str = '时';
            break;
          case 3:
            min = 0;
            max = 59;
            str = '分';
            break;
        }
        loop(0, checkIdx + 1, function (p) {
          if (_this.beginTime[p] != _this.resultArr[p]) {
            dir = 1;
            loop(0, checkIdx + 1, function (q) {
              if (_this.endTime[q] != _this.resultArr[q]) dir = -1;
            });
          }
        });

        if (dir == 0) {
          min = _this.beginTime[checkIdx + 1] >= min ? _this.beginTime[checkIdx + 1] : 0;
        } else if (dir == 1) {
          max = _this.endTime[checkIdx + 1] <= max ? _this.endTime[checkIdx + 1] : 0;
        }
        _this.initRangeArr(min, max, str, checkIdx + 1, dir);
      }
      _this.checkRange(checkIdx + 1, sta);
    },
    initPosition: function (dis, max, idx) {
      dis     = dis < 0 ? 0 : dis;
      dis     = dis > max ? max : dis;
      var sub = dis % this.liHeight;
      if (sub < this.liHeight / 2) {
        this.distance[idx] = dis - sub;
      } else {
        this.distance[idx] = dis + (this.liHeight - sub);
      }
      return this;
    },
    initSpeed: function (arr, dir, max, idx) {
      var variance = 0;
      var sum      = 0;
      for ( var i in arr ) {
        sum += arr[i] - 0;
      }
      for ( var j in arr ) {
        variance += (arr[j] - (sum / arr.length)) * (arr[j] - (sum / arr.length));
      }
      var rate = 0;
      if ((variance / arr.length).toFixed(2) > .1) {
        rate = max > this.liHeight * 15 ? dir * 2 : 0;
        this.initPosition(this.distance[idx] + rate, max, idx);
        this.move.speed[0] = .2;
      } else {
        this.initPosition(this.distance[idx], max, idx);
        this.move.speed[0] = this.move.speed[0] > 0.2 ? .2 : this.move.speed[0];
      }
      return this;
    },
    touch: function (event, that, $selector, array, idx) {
      event = event || window.event;
      event.preventDefault();
      switch (event.type) {
        case "touchstart":
          that.move.speed = [];
          that.start.Y    = event.touches[0].clientY;
          that.start.time = Date.now();
          break;
        case "touchend":
          that.end.Y         = event.changedTouches[0].clientY;
          var tempDis        = that.distance[idx] + (that.start.Y - that.end.Y);
          that.distance[idx] = tempDis < 0 ? 0 : (tempDis < that.maxHeight[idx] ? tempDis : that.maxHeight[idx]);
          that.initSpeed(that.move.speed, that.start.Y - that.end.Y, that.maxHeight[idx], idx);
          var tempRes = that.end.index = that.distance[idx] / that.liHeight + 2;

          $selector.style.transform        = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
          $selector.style.webkitTransform  = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
          $selector.style.transition       = 'transform ' + that.move.speed[0] + 's ease-out';
          $selector.style.webkitTransition = '-webkit-transform ' + that.move.speed[0] + 's ease-out';

          that.recent_time[that.idxArr[idx]] = that.resultArr[idx] = that['array' + that.idxArr[idx]][tempRes];
          that.checkRange(0, (that.start.Y - that.end.Y) > 0);
          break;
        case "touchmove":
          event.preventDefault();
          that.move.Y = event.touches[0].clientY;
          var offset  = that.start.Y - that.move.Y;
          if (that.distance[idx] == 0 && offset < 0) {
            $selector.style.transform        = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
            $selector.style.webkitTransform  = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
            $selector.style.transition       = 'transform 0.3s ease-out';
            $selector.style.webkitTransition = '-webkit-transform 0.3s ease-out';
          } else {
            $selector.style.transform       = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
            $selector.style.webkitTransform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
          }
          if (this.distance[idx] <= -that.maxHeight[idx]) {
            $selector.style.transform        = 'translate3d(0, -' + that.liHeight + 'px, 0)';
            $selector.style.webkitTransform  = 'translate3d(0, -' + that.liHeight + 'px, 0)';
            $selector.style.transition       = 'transform 0.3s ease-out';
            $selector.style.webkitTransition = '-webkit-transform 0.3s ease-out';
          }
          if (Math.abs(offset).toFixed(0) % 5 === 0) {
            var time = Date.now();
            that.move.speed.push((Math.abs(offset) / (time - that.start.time)).toFixed(2));
          }
          break;
      }
    }
  };
  if (typeof exports == "object") {
    module.exports = DateSelector;
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return DateSelector;
    })
  } else {
    win.DateSelector = DateSelector;
  }
})(window, document);