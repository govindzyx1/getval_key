var keyValues = JSON.parse(context.getVariable("jsonKeysValues"));
var arrayLength = keyValues.items.length;
var found = false;
for (var i = 0; i < arrayLength; i++) {
   var item = keyValues.items[i];
   if (item.id == context.getVariable("jsonId")) {
       found = true;
       context.setVariable("response.content", JSON.stringify(item));
   }
}
if (found === false) {
    context.setVariable("itemFound", false);
} else {
    context.setVariable("itemFound", true);
}