<?php
//Route::get('cook/demo/:keyword', function ($keyword) {
//    return 'keyword : '.$keyword;
//});
//
//Route::get('cook/menu/:keyword', 'index/Cook/getMenu');
//
//Route::get('test', function () {
//    $r = env();
//    return json($r);
//});

//获取收藏菜谱
Route::get('cook/collect','index/Cook/getCollect');
//收藏或取消收藏菜谱
Route::post('cook/collect','index/Cook/postCollect');
//获取菜谱详情
Route::get('cook/detail/:id','index/Cook/getDetail');
//关键字查询菜谱
Route::get('cook/menu/:keyword','index/Cook/getMenuByKeyword');
