var dbQuery = function () {
    console.log('Query results');
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map