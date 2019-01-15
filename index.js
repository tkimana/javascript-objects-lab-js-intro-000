var recipes = {sandwich: "egg"}
function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, {[key]: value})

}
function destructivelyUpdateObjectwithKeyAndValue(object,key,value) {
  return Object.assign({}, object,{[key]: value})

}
