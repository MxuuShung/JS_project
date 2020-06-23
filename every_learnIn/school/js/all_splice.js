var country = [
    {
      farmer:'卡斯伯'
    }
    ,{
      farmer:'查理'
    },{
      farmer:'約翰'
    }
  ]
  var list = document.querySelector('.list');
  
  //更新農場資料
  function updateList(){
    var str = '';
    var len = country.length;
    for(var i = 0;len>i;i++){
      str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
    }
    list.innerHTML = str;
  }
  updateList();
  
  //確認點擊的農夫是誰
  function checkList(e){
      //撈出num的第幾筆資料
    var num = e.target.dataset.num;
    // console.log(e.target.nodeName);
    if(e.target.nodeName !== 'LI'){return};
    country.splice(num,1);//刪除之後，重新渲染一次
    updateList();//更新數據，使畫面與資料同步
  }
  list.addEventListener('click',checkList,false);






  /**
   * color["blue","pink","black"];
   * color.splice(0,2);
   * splice(第幾筆的位置,刪除幾筆資料);
   * 刪除color["blue","pink"]
   * 只剩下color["black"];
   */