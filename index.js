var recipes = {sandwich: "egg"}
function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, {[key]: value})

}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return Object.assign({}, object,{[key]: value})

}
function deleteFromObjectByKey(object,key) {
  return Object.assign({}, object,{[key]: value})
  delete object.[key]
}


