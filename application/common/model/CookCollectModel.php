<?php
namespace app\common\model;

use think\Model;

class CookCollectModel extends Model
{
    protected $pk = 'id';
    protected $table = 'bj_cook_collect';

    //获取关注列表
    public function getListByUid($uid){
        if(empty($uid)) return false;
        return $this->where('uid',$uid)->select();
    }

    //是否已收藏
    public function checkIsCollect($uid,$menu_id){
        if(empty($uid) || empty($menu_id)) return false;
        return $this->where(['menu_id'=>$menu_id,'uid'=>$uid])->find()? true : false;

    }

    public function doCollect($data){
        if(empty($data['uid']) || empty($data['menu_id'])) return false;
        $where = ['uid'=>$data['uid'],'menu_id'=>$data['menu_id']];
        if($this->field('id')->where($where)->find()){
            return $this->where($where)->delete();
        }else{
            $data['ctime'] = time();
            return $this->save($data);
        }
    }
}