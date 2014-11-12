var globalCache = require("../../../../var/globalCache.js");

module.exports = globalCache.add("*.flag.*.add", function(flag, content, item) {

    if (item.type == flag && typeof content == "string" && content) {
        item.setName(content.trim());
        // stop cycle
        return false;
    }
});