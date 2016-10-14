(function() {
  var domToStruct, structToDom;

  domToStruct = function(env, callback) {
    var nos, o, oc, out;
    nos = {};
    oc = env.domobject;
    o = env.rootcolumn;
    out = {};
    return async.eachSeries(o.find("div[objinx]"), function(t, callback) {
      var ni, objinx, oo;
      t = $(t);
      objinx = t.attr("objinx");
      oo = oc[objinx];
      if (!oo) {
        return callback(1);
      }
      if (nos[oo.name]) {
        ni = 1;
        while (nos[oo.name + ni]) {
          ni++;
        }
        oo.setName(oo.name + ni);
      }
      oo.getValueType(function(err, at) {
        var pn, po, pobj, title;
        if (err) {
          return callback(err);
        }
        nos[oo.name] = {
          valueType: at
        };
        title = oo.title;
        if (title) {
          nos[oo.name].title = title;
        }
        po = t.parent().closest("div[objinx]");
        if (po[0]) {
          pobj = oc[po.attr('objinx')];
          if (!pobj) {
            return callback(1);
          }
          pn = pobj.name;
          if (!nos[pn]) {
            return callback(1);
          }
          nos[pn].valueType[oo.name] = nos[oo.name];
        } else {
          out[oo.name] = nos[oo.name];
        }
        return callback(0);
      });
    }, function(err) {
      return callback(err, out);
    });
  };

  structToDom = function(json, env, callback) {
    var doit, i, nos, v, _ref;
    nos = {};
    _ref = env.domobject;
    for (i in _ref) {
      v = _ref[i];
      nos[v.getName()] = v;
    }
    doit = function(json, callback) {
      return async.forEachOf(json, function(v, k, callback) {
        if (nos[k] && v.valueType) {
          return nos[k].setValueType(v, function(err) {
            if (err) {
              return callback(err);
            }
            if (nos[k].pluginType !== 'form' && $.isPlainObject(v.valueType)) {
              return doit(v.valueType, callback);
            } else {
              return callback(0);
            }
          });
        } else {
          return callback(0);
        }
      }, callback);
    };
    return doit(json, callback);
  };

  window.structToDom = structToDom;

  window.domToStruct = domToStruct;

}).call(this);
