export class
func
{
    $id: function (ele) {
        return document.getElementById(ele);
    }
,
    $q: function (ele) {
        return document.querySelector(ele);
    }
,
    $qa: function (ele) {
        return document.querySelectorAll(ele);
    }
}