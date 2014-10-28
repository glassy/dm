
angular.module("glassy2014",[])

.factory("$pts", myPts)
.factory("$green", myGreen)
.factory("$boss", myBoss)
.factory("$noParty", myNoParty)
.factory("$all", ["$green","$boss","$noParty", myAll]);


function myPts() {
  return {
     "綠黨" : {
        hackfoldr : "http://hackfoldr.org/greenparty/",
        toThis : "http://green.democracy.tw/",
        toIcon : "http://upload.wikimedia.org/wikipedia/zh/c/c0/Emblem_of_Green_Party_Taiwan.png",
        toPrefix :"挺好的"
      },
      
      "人民民主陣線": {
          hackfoldr : "http://hackfoldr.org/peopleboss/",
          toThis : "",
          toIcon : "https://s3-ap-northeast-1.amazonaws.com/kkbox-registrano/upload_images/34664/___promote.png",
          toPrefix : "挺你的"
      },
      
      "無黨人士": {
          hackfoldr : "http://hackfoldr.org/glassy/",
          toThis : "",
          toIcon : "https://docs.google.com/drawings/d/1_bo1LrbPq-o90_HwAw6IonBdp5er-lb9Lt5DNGyIiqY/pub?w=480&h=360",
          toPrefix : "主張透明政府的"
      },

      "樹黨": {
          hackfoldr : "http://hackfoldr.org/treeparty/",
          toThis : "",
          toIcon : "http://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
          toPrefix : "尚青的"
      }
  }
}


function myGet(n) {
    var sureList = this.data.filter(function(o){
        return o.name == n;
    });

    if (sureList[0]) return sureList[0];

    var maybeList = this.data.filter(function(o){
        return o.name.indexOf(n) > -1;
    });
    return maybeList[0] || {};
}


function myTree(){}
function myNoParty(){
  return {
    data :[
        {
          "site":"http://kptaipei.tw/",
          "name":"柯文哲",
          "img":"http://goooooooogle.github.io/kp/img/kp.png",
          "pt":"無黨人士",
          "note":"柯文哲主張政府透明化，讓人民能瞭解，能參與，能使用政府的資料，創造政府與民間合作的新氣象。<br/><br/>政策方面，柯文哲的政策主張，不是什麼大建設或軸線翻轉，而是貼近市民生活的道路挖補、食品安全、教育與醫療資源的平等。 <br/><br/>柯文哲說：<br/><br/>從醫生轉換為素人參政，我始終認為，不管是政治人物或媒體，都應該堅守基本的道德與價值，否則就會造成信任的崩解，人民之間不互信，更不相信政府，這是目前台灣社會空轉的重要原因。<br/><br/>對我而言，這不只是一場選舉而已，它更是一場改變政治、改變選舉文化的社會運動。 <br/><br/>詳見：http://kptaipei.tw/",
          "address":"台北市",
          "latlngColumn":"25.0374?? 121.56355",
          "role":"市長",
          "connect_me":""
        },
        {
          "site":"http://www.stormmediagroup.com/opencms/news/detail/bdaa1343-d6a3-11e3-9580-ef2804cba5a1/?uuid=bdaa1343-d6a3-11e3-9580-ef2804cba5a1",
          "name":"王奕凱",
          "img":"",
          "pt":"無黨人士",
          "note":"為太陽花活動和獨立運動發聲支持的好市民，曾質疑退場決策不夠透明",
          "address":"士林北投區",
          "latlngColumn":"25.1306?? 121.498001",
          "role":"議員",
          "connect_me":""
        },
        {
          "site":"https://www.facebook.com/annebojay?fref=ts",
          "name":"洪美惠",
          "img":"",
          "pt":"無黨人士",
          "note":"慈濟內湖保護區守護聯盟",
          "address":"內湖大湖里",
          "latlngColumn":"25.091801?? 121.602997",
          "role":"里長",
          "connect_me":""
        }
      ],
    get : myGet
  }


}



function myAll($green, $boss, $noParty){
  return {
    data : $green.data.concat($boss.data).concat($noParty.data),
    get : myGet
  }
}


function myBoss(){
  return {
    data: [
              {
                "site":"http://news.ltn.com.tw/news/politics/breakingnews/1096911",
                "name":"林詩涵",
                "img":"",
                "pt":"人民民主陣線",
                "note":"輔仁大學心理系碩士生，參選是希望打破藍、綠政黨，以「菁英」為主，卻無法落實人民需求的政治現況",
                "address":"嘉義市",
                "latlngColumn":"23.48152?? 120.45363",
                "role":"市長",
                "connect_me":""
              },
              {
                "site":"",
                "name":"張育華",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"高雄市鳳山區",
                "latlngColumn":"22.63631?? 120.35699",
                "role":"議員",
                "connect_me":""
              },
              {
                "site":"",
                "name":"王芳萍",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"高雄市苓雅區",
                "latlngColumn":"22.62198?? 120.3124",
                "role":"議員",
                "connect_me":""
              },
              
              {
                "site":"",
                "name":"王淑娟",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"花蓮縣吉安鄉第二選區",
                "latlngColumn":"23.973459?? 121.563202",
                "role":"鄉民代表",
                "connect_me":""
              },
              
              {
                "site":" https://www.facebook.com/people/%E8%B3%80%E5%85%89%E8%90%AC/100000156851871",
                "name":"賀光萬",
                "img":"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/1454839_749567901725098_1095912825_n.jpg?oh=60e0d521de75cf0f8ff4d7e8be9a09eb&oe=548271DF&__gda__=1417962811_7193900180c323273eecc33ab3eb915c",
                "pt":"人民民主陣線",
                "note":"工殤協會專員",
                "address":"桃園市",
                "latlngColumn":"24.99367?? 121.30199",
                "role":"議員",
                "connect_me":""
              },
              
              {
                "site":"",
                "name":"何燕堂",
                "img":"http://www.ltn.com.tw/2014/new/sep/4/images/bigPic/600_105.jpg",
                "pt":"人民民主陣線",
                "note":"已經住在基隆20多年的何燕堂今年要選市長，他說，眼看基隆越來越差，少數壟斷權力，犧牲弱勢來發達強者。<br/><br/>不少人不滿，一個基隆市，上從混蛋市長、喬事議長，到現在，不分藍綠18位議員涉入弊案遭調查，基隆人還要忍受多久？基隆早就從台灣頭變成台灣吊車尾。<br/><br/>何燕堂是輔大心理系講師，參與社會運動長達25年，在基隆住了20多年。他說，過去選舉政治人物開出的追討港工捐、捷運到基隆等等政見，選後卻未兌現，人民對這種權力集中的政治結構無可奈何，這次親身投入選舉就是要打破政治結構，還權於民。",
                "address":"基隆市",
                "latlngColumn":"25.13162?? 121.74479",
                "role":"市長",
                "connect_me":""
              },
              {
                "site":"http://forums.chinatimes.com/report/newslunch/970401/images/970401a1.jpg",
                "name":"鄭村棋",
                "img":"http://forums.chinatimes.com/report/newslunch/970401/images/970401a1.jpg",
                "pt":"人民民主陣線",
                "note":"工運悍將、前台北市勞工局長鄭村棋，這次親上火線將代表人民民主陣線參選連線參選基隆市議員，與大家一起參與基層選舉。<br/><br/>他左打國民黨、右批民進黨，提出改變基隆，需要新政治，也就是人人參與，才能徹底改變「主僕顛倒」的假民主，實踐「主僕歸位」的真民主。",
                "address":"基隆市信義區",
                "latlngColumn":"25.1295?? 121.75263",
                "role":"市議員",
                "connect_me":""
              },
              {
                "site":"",
                "name":"龔尤情",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"基隆市中山區",
                "latlngColumn":"25.15268?? 121.72965",
                "role":"",
                "connect_me":""
              },
              {
                "site":"",
                "name":"袁孔琪",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"基隆市安樂區",
                "latlngColumn":"25.12089?? 121.72338",
                "role":"",
                "connect_me":""
              },
              {
                "site":"",
                "name":"陳重光",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"基隆市七堵區",
                "latlngColumn":"25.11579?? 121.71315",
                "role":"",
                "connect_me":""
              },
              {
                "site":"",
                "name":"黃小陵",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"基隆市仁愛區",
                "latlngColumn":"25.12506?? 121.73682",
                "role":"",
                "connect_me":""
              },
              {
                "site":"",
                "name":"余重城",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"基隆市中正區",
                "latlngColumn":"25.15181?? 121.76779",
                "role":"",
                "connect_me":""
              },
              {
                "site":"",
                "name":"鍾君竺",
                "img":"",
                "pt":"人民民主陣線",
                "note":"守護生存權，爭妓權17年",
                "address":"台北市中山大同區",
                "latlngColumn":"25.0642?? 121.5125",
                "role":"議員",
                "connect_me":""
              },
              {
                "site":"http://mixing-peopleboss.blogspot.tw/2011/09/2.html",
                "name":"周佳君",
                "img":"http://2.bp.blogspot.com/-w1uSh64-8zs/U-YYp_0RU6I/AAAAAAAAAKo/2kcH1OpR6DU/s1600/%E4%BD%B3%E5%90%9B%E5%85%A8%E5%AE%B6%E7%85%A7%E6%B5%B7%E9%82%8A.jpg",
                "pt":"人民民主陣線",
                "note":"大學畢業後從事草根社會運動，至今廿年。曾被判刑入獄，與底層弱勢者一起生活",
                "address":"台北市士林北投區",
                "latlngColumn":"25.1306?? 121.498001",
                "role":"議員",
                "connect_me":"0933-121-338"
              },
              {
                "site":"http://mixing-peopleboss.blogspot.tw/2014/06/adhd.html",
                "name":"王芝安",
                "img":"",
                "pt":"人民民主陣線",
                "note":"每個里都有學校，社區作為一個政策落實基層行政單元，里長既為人民選出，除了發傳單進行政策佈達，更應有著積極的帶著里民思考討論政策的機制，落實公民參與基層審議機制，進而共同行動回應”不良”政策的里民意見，集體要求政策資源的重新使用，讓鄰里居民能獲得更適切的尊重與照顧，達到主權在民由下而上的的社區治理民主制度。",
                "address":"士林區岩山里",
                "latlngColumn":"25.10689?? 121.53405",
                "role":"里長",
                "connect_me":"0972-968-008"
              },
              {
                "site":"http://mixing-peopleboss.blogspot.tw/2014/03/blog-post_13.html",
                "name":"莊惠玲",
                "img":"",
                "pt":"人民民主陣線",
                "note":"我是莊惠玲，一位社運新人、政治素人， 是不合格公民參政團的成員， 也是士林區的居民，及福華里長參選人。  因為參加社運團體，我聲援反核遊行， 反核算是政治正確的立場， 但是，我打從心底真的反核嗎? 我又為什麼反???  這次，我很嚴肅也認真地面對， 和其他參政團的人民老大們組成反核學習小組， 與台電主管面對面談核四與核電問題、 拜訪貢寮自救會、參訪核四廠。  一年多的學習，不再抗拒瞭解專業的核電， 人民也能變專家! 說到底核電議題是能源問題， 背後是在講台灣要往哪發展，我們人民要什麼樣的生活!  透過核電議題的學習，也是政治覺醒的過程。 各種政策應該是從人民的利益出發， 不該掌握在少數官僚、財團和政客。 面對目前的社會現況，參政參選已是不可逃避的解決之道。  已過30而立的我，下了很大的決心，拿起自己的政治權， 回到自己從小到大的福華里，投入參選里長， 從組織基層里民開始。",
                "address":"士林區福華里",
                "latlngColumn":"25.0818?? 121.517998",
                "role":"里長",
                "connect_me":"0958-085-905"
              },
              {
                "site":"",
                "name":"侯務葵",
                "img":"",
                "pt":"人民民主陣線",
                "note":"基層教師協會",
                "address":"北投區奇岩里",
                "latlngColumn":"25.1283?? 121.511002",
                "role":"里長",
                "connect_me":""
              },
              {
                "site":"",
                "name":"李健裕",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"北投區清江里",
                "latlngColumn":"25.1287?? 121.501999",
                "role":"里長",
                "connect_me":""
              },
              {
                "site":"",
                "name":"鄧雅文",
                "img":"人民民主陣線",
                "pt":"",
                "note":"新北市ADHD(過動症)的決策粗糙，壓扁了社區家長、學校教師與學生的校園主體空間",
                "address":"北投區桃源里",
                "latlngColumn":"25.081329?? 121.518757",
                "role":"里長",
                "connect_me":""
              },
              {
                "site":"",
                "name":"梁秀眉",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"北投區桃源里",
                "latlngColumn":"25.138?? 121.483002",
                "role":"里長",
                "connect_me":""
              },
              {
                "site":"",
                "name":"李素楨",
                "img":"",
                "pt":"人民民主陣線",
                "note":"身為一位肢體障礙者，很了解被需要協助，但又要被標籤的拉扯感。我們對於社會福利資源給予的方式，是先將人分類，再給予資源協助。這沒錯。錯在，對於這樣的分類，政府不斷予以 “標籤化” 。可是，在教育制度與日常生活中，完全不消除這種 “標籤化” 對待，這才是問題之所在。在資源的給予上，往往無法以 “全人” 的看待，而是給予 “切割” 。即，完全依照民間壓力或資源多寡來論。有些問題也許根本解決不了，也不能稱作問題，就像我的殘障。就要學會伴隨，學會一路給予不同資源協助，讓我長出具有 「跛腳」獨特性的成人。",
                "address":"永和區前溪里",
                "latlngColumn":"25.01055?? 121.512802",
                "role":"里長",
                "connect_me":""
              },
              {
                "site":"http://www.civilmedia.tw/archives/tag/%E5%8F%B0%E7%81%A3%E5%9C%8B%E9%9A%9B%E5%AE%B6%E5%BA%AD%E4%BA%92%E5%8A%A9%E5%8D%94%E6%9C%83-%E4%B8%BB%E4%BB%BB-%E6%9D%8E%E4%B8%B9%E9%B3%B3",
                "name":"李丹鳳",
                "img":"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/224007_501685063198906_811400179_n.jpg?oh=46f7ea9e7ebd4d8a5f3e699a7db80f43&oe=5486BEA0&__gda__=1418425932_ee87b5099a414f3da59394d0754e79a5",
                "pt":"人民民主陣線",
                "note":"要做事、會做事，真的不用靠學經歷！ 重點還是你有沒有決心去做！ 現在的台灣時局，已經告訴我們：誰也靠不住！還是靠我們自己來吧！<br/><br/>李丹鳳是資深的社工師，國際家庭互助協會主任，長年關懷外藉配偶與在地公民覺醒自救運動。",
                "address":"新北市三重蘆洲區",
                "latlngColumn":"25.089399?? 121.477997",
                "role":"議員",
                "connect_me":""
              },
              {
                "site":"",
                "name":"李玉女",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"新北市蘆洲區恆德里",
                "latlngColumn":"25.0821?? 121.478996",
                "role":"里長",
                "connect_me":""
              },
              {
                "site":"",
                "name":"邱皓庭",
                "img":"",
                "pt":"人民民主陣線",
                "note":"",
                "address":"新北市蘆洲區延平里",
                "latlngColumn":"25.0793?? 121.461998",
                "role":"里長",
                "connect_me":""
              }
            ],
    get: myGet
  }
}


function myGreen() {
  return  { 
    data: [
        {
          "site":"http://green.democracy.tw/rober86",
          "name":"羅岳峰",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/rober86/files/dsc_3237.jpg?itok=MAjfBFQ6",
          "pt":"綠黨",
          "note":"羅岳峰認為人可以選擇為五斗米折腰，也可以選擇為理念犧牲奉獻，過去在華山基金會服務獨居老人的歷練，除了加強了統籌與規劃的能力，也發現在人口老化將在我們這一代成為嚴重的問題，而政府對於這一塊卻少有作為，成為參選投入市政的一個契機。 <br/><br/> 隻身一人無背景無財力的年輕人居然要參政，大家一定會好奇為什麼要找自己麻煩，羅岳峰倒是想的很直接，他覺得政治原是眾人之事，因為看到需要改變的地方因此參選，更希望藉由親自參與選舉，來喚醒大眾對政治與弱勢族群的關心。",
          "address":"桃園市",
          "latlngColumn":"24.99367?? 121.30199",
          "role":"市議員",
          "connect_me":"      電話：0910617709     信箱：1986markster@gmail.com"
        },
        {
          "site":"http://green.democracy.tw/chungli2014",
          "name":"王浩宇",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/chungli2014/files/dsc_3196.jpg?itok=PmDFTb4b",
          "pt":"綠黨",
          "note":"王浩宇所經營的『我是中壢人』粉絲團，四年來已成為中壢人生活的一部分，大小瑣事找狗找失物抓肇事逃逸都在這邊處理，根本可算是擁有24萬人的網路版里民辦公室。<br/><br/> 參選是一個很大的決心，首先必須要走出網路生活圈，去接觸不在粉絲團更不用網路的民眾，因此王浩宇早已開始不斷街頭短講，不但要面對天氣、不看好甚至惡言相向的人，體力也是一大挑戰。 <br/><br/>但他認為短講一定要做，不只是競選，也希望能進行公民意識溝通，不只一人的觀念改變才是真正的改變，更希望以此鼓勵更多年輕人跳出來關心土地和國家。",
          "address":"桃園市中壢區",
          "latlngColumn":"24.96586?? 121.22489",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/tang",
          "name":"湯琳翔",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/tang/files/dsc_3225.jpg?itok=hpGJmrHt",
          "pt":"綠黨",
          "note":"好的定義百百款 政見漂亮、學歷高、在地出身、有經驗、長得帥(?) <br/><br/> 但是唯有一點是我認為自己和傳統候選人差異最大的<br/><br/>當一個候選人依賴某件事物當選，他就會受到那件事物的控制<br/>靠灑錢的，他下次就必須灑更多錢<br/>靠綁樁的，他就得更重視樁腳的利益<br/>而依賴升斗小民一票票累積起來的，他就必須更用心地傾聽這些人的聲音",
          "address":"桃園市平鎮區",
          "latlngColumn":"24.94549?? 121.21858",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/ellen",
          "name":"張明麗",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/ellen/files/quan_shen_zhao__0.jpg?itok=q0SlLK2Y",
          "pt":"綠黨",
          "note":"校園非基改，媽媽向前行，食安一定贏             <br/>             <br/>張明麗是七歲孩子的媽媽，為了下一代的健康，答應綠黨的邀請，代表綠黨參選基隆七堵區的市議員，因為參選的決定，希望積極進行校園午餐非基改、自然生活、綠繪本的推廣種子培力，並開始嘗試親子共學的推廣種子培力。           ",
          "address":"基隆市七堵區",
          "latlngColumn":"25.09675?? 121.71389",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/wangchungming",
          "name":"王鐘銘",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/wangchungming/files/dsc_3164.jpg?itok=odst_bXi",
          "pt":"綠黨",
          "note":"在人文薈萃的淡水，關心環境、文史議題的人，對「王鐘銘」這名字肯定不陌生。<br/><br/>為什麼走上政途？對環境保護深刻的信念是他最大動力。<br/><br/>四年前首次參選新北市議員，王鐘銘一個無黨無派的素人青年，以「我回到淡海四鄉鎮，向您應徵一份工作」獲得跌破眾人眼鏡的票數。<br/><br/>王鐘銘不只是以參與政治來守護淡海。非選舉期間，也致力於鄉土文化，守護土地。<br/><br/>參與淡北道路、淡江大橋、重建街拓寬、小白宮都更、淡海二期徵收、石門核一廠等議題，為土地與人民發聲。",
          "address":"新北市淡水區",
          "latlngColumn":"25.16972?? 121.44078",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/muwan",
          "name":"楊木萬",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/muwan/files/dm_0.jpg?itok=jZGn69Nl",
          "pt":"綠黨",
          "note":"楊木萬大哥的政見： <br/><br/>強力監督各地改善淹水問題 <br/><br/>增設公立托兒所，以利基層幼兒受到良好的託育 <br/>推動輔導失業勞工就業與生活保障政策 <br/><br/>反對徵收農地、不當開發，並積極輔導農民有機耕種 <br/><br/>推動各區環保巡守隊，嚴防空污、水污即廢棄物濫倒，加以取締 <br/><br/>推動社區生活環保，建立完善的垃圾減量與廚餘回收、堆肥系統",
          "address":"新北市土城區",
          "latlngColumn":"24.97219?? 121.44356",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/star",
          "name":"梁益誌",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/star/files/image.jpeg?itok=hVwJT7iH",
          "pt":"綠黨",
          "note":"預防公害、平整路面、便捷交通、行人無礙、綠色城市、優質托育、公開議會、舊地復甦及青年逐夢。",
          "address":"高雄市",
          "latlngColumn":"22.62015?? 120.31226",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/afu",
          "name":"傅靜凡",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/afu/files/dsc_2814.jpg?itok=jYltlmC7",
          "pt":"綠黨",
          "note":"2009年，澎湖公民成功的以公投拒絕賭場的設立，向全台展現傲人的公民力量，也讓傅靜凡下定決心投入行動，徹底改變澎湖的命運，除了發起成立「海洋公民基金會」，對於長久以來中央和政府的漠視、縣政府和議會的短視及無擔當，讓澎湖的發展一直走著錯誤的方向，傅靜凡決定參選議員。<br/><br/>當澎湖是個「有機島」，任何出產自澎湖的農作物，都代表健康､純淨､無污染，自然而然澎湖的品牌就會建立｡",
          "address":"澎湖縣馬公",
          "latlngColumn":"23.56607?? 119.57832",
          "role":"縣議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/samyang",
          "name":"楊志翔",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/samyang/files/10406998_742868729114143_5779788630255722990_n.jpg?itok=SWBxBdd4",
          "pt":"綠黨",
          "note":"在科技發展中回顧環境保護<br/><br/>志翔19歲就讀台師大時便參與社會運動，參與環境保護、婦女與性別、身障、福利及教育等人權倡議與組織，目前仍讀中央大學碩士班。今年參與318學運後決定參選市議員。  Facebook臉書《我住新竹市》，有許多志翔對新竹市政的監督、建言及第一線實地勘查，還有投稿媒體的文章，有時也比新聞更快報導新竹市的緊急災情、氣候與路況等資訊。",
          "address":"新竹市東區",
          "latlngColumn":"24.80543?? 120.97335",
          "role":"市議員",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/antung",
          "name":"張安東",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/antung/files/resize_of_dsc_3119_1.jpg?itok=lT3VCCFI",
          "pt":"綠黨",
          "note":"身為綠黨老黨員，更是長期關心在地發展和永續經營的張安東，從2010參與綠黨舉辦之「專業里長培訓營」開始便積極規劃里長參選事宜。<br/><br/>雖然里長不如議員來的大咖，但張安東認為里長是最接近人民生活的公職人員，不能只是上頭好，基層也要好社會才能改變。  對於里長參選人如何打出名聲，他認為別無他法只能一戶戶拜訪，而且不能只是發發文宣，更要認真傾聽里民心聲。",
          "address":"台北市中正區文祥里",
          "latlngColumn":"25.0362?? 121.526001",
          "role":"里長",
          "connect_me":""
        },
        {
          "site":"http://green.democracy.tw/jaywin2014",
          "name":"周江杰",
          "img":"http://v.democracy.tw/sites/default/files/styles/medium/public/jaywin2014/files/dsc_2896.jpg?itok=EszZAwvL",
          "pt":"綠黨",
          "note":"周江杰說，以前跟大家一樣都覺得政治很遙遠，要說會想到有一天會參選根本是不可能。<br/><br/> 但是政治大學的第一年，陳水扁前市長尋求連任時位賺取120元 的高時薪跑去協助發傳單，算是啟蒙民主的第一課。但高度期待的政黨輪替雖然發生，卻讓心中的理想自高樓中殞落，也認清要在兩大黨外尋求民主的思考和投 入，2008年參與霄裡溪事件，2009年再進博士班，2011年投入荒野保護協會新竹分會，開始親近土地，守護像母親般的河流。<br/><br/> 周江杰把從政視為將愛鄉土的價值紥根竹東的第一步。只是民主，要走得遠，就得紥得深、紥得穩，因此他除了對於選情樂觀，也陳諾會長期留在地方經營，這是對故鄉、對民主雙倍份量的感情。",
          "address":"新竹縣竹東區",
          "latlngColumn":"24.73681?? 121.09183",
          "role":"縣議員",
          "connect_me":"電話：0972894343     信箱：ccchow2@gmail.com"
        }
      ],
    get: myGet
  }; 
}

