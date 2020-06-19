<?php
namespace app\common\model;

use think\Model;

class CookModel extends Model
{
    protected $pk = 'id';
    protected $table = 'bj_cook';

    //获取菜谱详情
    public function getDetail($id){
        if(empty($id)) return false;
        $data = $this->field('content')->where('id',$id)->find();
        if($data)
            return json_decode($data['content'],true);
        else
            return $this->getRemoteDateAndSave($id);
    }

    //读取第三方api并保存和返回数据
    public function getRemoteDateAndSave($id){
        $url = 'http://apis.juhe.cn/cook/queryid?key=f22e623af596fba1b03beb7fe83a42ca&id='.$id;
        $res = file_get_contents($url);
        $result = json_decode($res,true);
        if($result['resultcode']==200){
            $data['id'] = $result['result']['data'][0]['id'];
            $data['title'] = $result['result']['data'][0]['title'];
            $data['content'] =  json_encode($result['result']['data'][0],JSON_UNESCAPED_UNICODE);
            $data['ctime'] = time();
            $this->save($data);
            $data['content'] = $result['result']['data'][0];
            return $result['result']['data'][0];
        }else{
            return null;
        }
    }

    public function getList($keyword,$page=1){
        if($keyword){
            $list = $this->where('title like "%'.$keyword.'%"')->field('content')->limit(($page-1)*5,5)->select()->toArray();
            if(empty($list) && $page==1){
                $this->getRemoteList($keyword);
                $list = $this->where('title like "%'.$keyword.'%"')->field('content')->limit($page-1,5)->select()->toArray();
            }
        }else{
            $list = $this->field('content')->limit($page-1,5)->select()->toArray();
        }
        return array_map(function($row){ return json_decode($row,true); },array_column($list,'content'));
    }

    public function getRemoteList($keyword){
        $url = 'http://apis.juhe.cn/cook/query?key=f22e623af596fba1b03beb7fe83a42ca&menu='.$keyword.'&rn=30&pn=1';
        $res = file_get_contents($url);
        $result = json_decode($res,true);
        if($result['resultcode']==200){
            //save
            $save_data = [];
            foreach ($result['result']['data'] as $v){
                $save_data[] = [
                    'id' => $v['id'],
                    'title' => $v['title'],
                    'content' => json_encode($v,JSON_UNESCAPED_UNICODE)
                ];
            }
            $this->insertAll($save_data);
        }
    }
}