<?php
namespace app\index\controller;
use app\common\model\CookCollectModel;
use app\common\model\CookModel;
use think\Controller;
use think\Request;

Class Cook extends Controller
{
    private $return = ['status' => 0, 'msg' => 'OK'];
    private $return_err = ['status' => 9001, 'msg' => 'params err'];
    public function __construct()
    {
        parent::__construct();
    }

    public function getMenuByKeyword($keyword){
        if(empty($keyword)) return false;
        $page = max(1, intval(request()->param('page')));
        $model = new CookModel();
        $this->return['data'] = $model->getList($keyword,$page);
        if(empty($this->return['data'])) $this->return['status'] = 9002;
        return json($this->return);
    }

    public function getDetail($id){
        if(empty($id)) return json($this->return_err);
        $uid = get_member_info()['uid'];
        $model = new CookModel();
        $collectModel = new CookCollectModel();
        $this->return['data']['detail'] = $model->getDetail($id);
        $this->return['data']['collect'] = $collectModel->checkIsCollect($uid,$id);
        return json($this->return);
    }

    public function getCollect(){
        $uid = get_member_info()['uid'];
        $model = new CookCollectModel();
        $this->return['data'] = $model->getListByUid($uid);
        return json($this->return);
    }

    public function postCollect(Request $request){
        $uid = get_member_info()['uid'];
        $data = $request->only(['menu_id','title']);
        $data['uid'] = $uid;
        $model = new CookCollectModel();
        if($model->doCollect($data)){
            $return = [
                'status' => 0,
                'msg' => 'OK'
            ];
        }else{
            $return = [
                'status' => 9002,
                'msg' => 'save failed , system err'
            ];
        }
        return json($return);
    }
}