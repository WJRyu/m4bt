// JavaScript Document

function forward() {
  $(".first").hide();
  $(".survey").show();
}


var Person_data = new Array();
var Child_data = new Array();
var Last_data= new Array();

class Person {
  constructor(name, age, job, job_site, job_satis, last_edu, address_Do, address_Gu, why_test) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.job_site = job_site;
    this.job_satis = job_satis;
	  this.last_edu = last_edu;
    this.address_Do = address_Do;
    this.address_Gu = address_Gu;
    this.why_test = why_test;
  }
}

class Child_stat {
	constructor(child_gen, child_age){
		this.child_gen=child_gen;
		this. child_age = child_age;
	}
}

class M4BT {
	constructor(m4bt){
		this.m4bt=m4bt;
	}
}

var cntt=0; 

/* document.getElementById("plus").addEventListener("click", function(e){
      var target = document.querySelector(".cnt"+cntt).cloneNode(true);
    //  document.querySelector(".cnt_last").innerHTML += target.innerHTML;
	cntt++;
	//var create = document.createElement('div');
	//create.className='cnt'+cntt;
	 document.querySelector(".cnt"+cntt).innerHTML += target.innerHTML;

});*/

var div;
var child_gen ;
var child_age ;


function plus0(){
	
	var target = document.querySelector(".cnt"+cntt).cloneNode(true);
	cntt++;
	
	 document.querySelector(".cnt"+cntt).innerHTML += target.innerHTML;
	
	$(".cnt"+cntt).find('input.child-gen1').attr('name','child-gen'+cntt);
	$(".cnt"+cntt).find('input.child-gen2').attr('name','child-gen'+cntt);
	
	$(".cnt"+cntt).find('input.childage_se').attr('class','text1 childage_se input_childage'+cntt);
	
 
}




function first() {
	for(cntt=0; cntt<5; cntt++){
	child_gen = $('input[name="child-gen'+cntt+'"]:radio:checked').val();
	child_age = $('.input_childage'+cntt).val();
	
	div = new Child_stat(child_gen, child_age);
	Child_data[cntt] = div;
		
	}
	
	console.log(Child_data);
	
  var name = document.getElementById('input_text').value;
  $("#name").val(name);
  console.log(name);

  var age = $('input[name="age"]:checked').val();
  $("#age").val(age);
  console.log(age);

  var job = document.getElementById('input_job').value;
  $("#job").val(job);
  console.log(job);

  var job_site = document.getElementById('input_job_site').value;
  $("#job-site").val(job_site);
  console.log(job_site);
	
var last_edu = $('input[name="최종학력"]:checked').val();
  $("#last-education").val(last_edu);
  console.log(last_edu);

  var job_satis = $('input[name="options"]:checked').val();
  $("#job-satisfied").val(job_satis);
  console.log(job_satis);

  var address_Do = document.getElementById('sido1').value;
  $("#address-Do").val(address_Do);
  console.log(address_Do);

  var address_Gu = document.getElementById('gugun1').value;
  $("#address-Gu").val(address_Gu);
  console.log(address_Gu);

  /*var child_num = $("#child-number option").index($("#child-number option:selected"));
  child_num += 1;
  console.log(child_num);*/

  var child_gen = $('input[name="child-gen"]:checked').val();
  $("#child-gender").val(child_gen);
  console.log(child_gen);

  var why_test = document.getElementById('input_why').value;
  $("#why-test").val(why_test);
  console.log(why_test);

  Person_data = new Person(name, age, job, job_site, job_satis, address_Do, address_Gu, why_test);
	
  $(".survey").hide();
  $(".pgs-s").show();
  $(".second").show();
  num = 0;
  next();
}

function Last() {
  $(".result").hide();
  $(".result1").show();
}

function Back() {
  $(".result1").hide();
  $(".result").show();
}

var num = 1,
  r = 0,
  pgs = 0;


$('document').ready(function () {
  var area0 = ["시/도 선택", "서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];
  var area1 = ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];
  var area2 = ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"];
  var area3 = ["대덕구", "동구", "서구", "유성구", "중구"];
  var area4 = ["광산구", "남구", "동구", "북구", "서구"];
  var area5 = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
  var area6 = ["남구", "동구", "북구", "중구", "울주군"];
  var area7 = ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"];
  var area8 = ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "여주군", "연천군"];
  var area9 = ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"];
  var area10 = ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"];
  var area11 = ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"];
  var area12 = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];
  var area13 = ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
  var area14 = ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"];
  var area15 = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
  var area16 = ["서귀포시", "제주시", "남제주군", "북제주군"];


  // 시/도 선택 박스 초기화

  $("select[name^=sido]").each(function () {
    $selsido = $(this);
    $.each(eval(area0), function () {
      $selsido.append("<option value='" + this + "'>" + this + "</option>");
    });
    $selsido.next().append("<option value=''>구/군 선택</option>");
  });


  // 시/도 선택시 구/군 설정

  $("select[name^=sido]").change(function () {
    var area = "area" + $("option", $(this)).index($("option:selected", $(this))); // 선택지역의 구군 Array
    var $gugun = $(this).next(); // 선택영역 군구 객체
    $("option", $gugun).remove(); // 구군 초기화

    if (area == "area0")
      $gugun.append("<option value=''>구/군 선택</option>");
    else {
      $.each(eval(area), function () {
        $gugun.append("<option value='" + this + "'>" + this + "</option>");
      });
    }
  });


});


function btn_on() {
  btn = document.getElementById('btn');
  btn.disabled = false;
}

var n_list = {
  n1: {
    "name": "이름1형"
  },
  n2: {
    "name": "이름2형"
  },
  n3: {
    "name": "이름3형"
  },
  n4: {
    "name": "이름4형"
  },
  n5: {
    "name": "이름5형"
  },
  n6: {
    "name": "이름6형"
  },
  n7: {
    "name": "이름7형"
  },
  n8: {
    "name": "이름8형"
  },
  n9: {
    "name": "이름9형"
  },
  n10: {
    "name": "이름10형"
  },
  n11: {
    "name": "이름11형"
  },
  n12: {
    "name": "이름12형"
  },
  n13: {
    "name": "이름13형"
  },
  n14: {
    "name": "이름14형"
  },
  n15: {
    "name": "이름15형"
  },
  n16: {
    "name": "이름16형"
  },
}

var q_list = {
  1: {
    "num": "1",
    "type": "work",
    "subtype": "BM",
    "title": "나는 부당한 일을 당해도 상황이 악화될까봐 넘어가는 편이다.",
    "rev": "0"
  },
  2: {
    "num": "2",
    "type": "work",
    "subtype": "BM",
    "title": "나는 나의 제안이 거절 당해도 설득될 수 있도록 계속 끝까지 노력하는 편이다.",
    "rev": "1"
  },
  3: {
    "num": "3",
    "type": "work",
    "subtype": "BM",
    "title": "나는 일을 할 때 동료들과 사적인 이야기를 하며 친밀감을 형성한다.",
    "rev": "0"
  },
  4: {
    "num": "4",
    "type": "work",
    "subtype": "BM",
    "title": "나는 다른 사람에게 나는 영향력과 리더십을 발휘하는 경향이 있다.",
    "rev": "1"
  },
  5: {
    "num": "5",
    "type": "work",
    "subtype": "BM",
    "title": "나는 다소 주도적인 성향을 가진 사람이라는 평가를 듣는 편이다.",
    "rev": "1"
  },
  6: {
    "num": "6",
    "type": "work",
    "subtype": "SA",
    "title": "나는 모험적인 상황에서 도전하는 것을 즐기는 편이다.",
    "rev": "1"
  },
  7: {
    "num": "7",
    "type": "work",
    "subtype": "SA",
    "title": "나는 어떤 분야든 새로운 것을 배우고 도전하는 것을 즐긴다.",
    "rev": "1"
  },
  8: {
    "num": "8",
    "type": "work",
    "subtype": "SA",
    "title": "나는 나와 관련 없는 것이라도 새로운 것에 대해 학습하고 배우는 것이 즐겁다.",
    "rev": "1"
  },
  9: {
    "num": "9",
    "type": "work",
    "subtype": "SA",
    "title": "나는 내 삶이 보다 다양한 경험할 수 있는 삶이 되기를 바란다.",
    "rev": "1"
  },
  10: {
    "num": "10",
    "type": "work",
    "subtype": "SA",
    "title": "나는 새로운 문화를 경험할 수 있는 낯선 환경에서 생활해보고 싶다.",
    "rev": "1"
  },
  11: {
    "num": "11",
    "type": "work",
    "subtype": "SA",
    "title": "나는 위험 요소가 있더라도 수익률이 높은 투자 방법을 선택하는 편이다.",
    "rev": "1"
  },
  12: {
    "num": "12",
    "type": "work",
    "subtype": "SA",
    "title": "나는 하루 어딘가 다녀오고 싶을 때 계획 없이 떠나는 편이다.",
    "rev": "1"
  },
  13: {
    "num": "13",
    "type": "work",
    "subtype": "SA",
    "title": "나는 다른 사람과 의논하기보다 스스로 계획 세운 계획에 맞추어 일을 하는 편이다.",
    "rev": "1"
  },
  14: {
    "num": "14",
    "type": "work",
    "subtype": "AN",
    "title": "나는 새로운 것을 만들기보다 기존의 방식이 더 좋다고 생각하는 경우가 많다.",
    "rev": "0"
  },
  15: {
    "num": "15",
    "type": "work",
    "subtype": "AN",
    "title": "나는 현재 처한 상황에 집중하며 현실적으로 실현가능한 것이 중요하다고 생각하는 편이다.",
    "rev": "0"
  },
  16: {
    "num": "16",
    "type": "work",
    "subtype": "AN",
    "title": "나는 주로 많은 사람들이 선택하는 안전한 것을 선택하는 편이다.",
    "rev": "0"
  },
  17: {
    "num": "17",
    "type": "work",
    "subtype": "AN",
    "title": "나는 여가시간이 보장되지 않더라도 수입이 안정적인 직업을 선호한다.",
    "rev": "0"
  },
  18: {
    "num": "18",
    "type": "work",
    "subtype": "AN",
    "title": "나는 일을 마친 후 새로운 일을 굳이 찾기보다 여유를 즐기는 편이다.",
    "rev": "0"
  },
  19: {
    "num": "19",
    "type": "work",
    "subtype": "AN",
    "title": "나는 창의적이며 새로운 생각을 잘 떠올리는 편이다.",
    "rev": "1"
  },
  20: {
    "num": "20",
    "type": "work",
    "subtype": "AN",
    "title": "나는 아이디어가 풍부하고 창의적인 사람으로 인정받는 것이 좋다.",
    "rev": "1"
  },
  21: {
    "num": "21",
    "type": "work",
    "subtype": "AN",
    "title": "나는 논리적이며 체계적인 사고를 하는 편이다.",
    "rev": "0"
  },
  22: {
    "num": "22",
    "type": "work",
    "subtype": "AN",
    "title": "나는 평소에 논리적이며 이성적인 성향의 사람들과 잘 어울린다.",
    "rev": "0"
  },
  23: {
    "num": "23",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 자녀와 많은 시간을 보내는 것만큼 내 삶의 균형을 유지하는 것도 중요하다고 생각한다.",
    "rev": "0"
  },
  24: {
    "num": "24",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 자녀가 내가 원하지 않는 일을 하는 것은 당연하다고 생각한다.",
    "rev": "1"
  },
  25: {
    "num": "25",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 부모의 도움과 지원이 자녀를 망칠 수 있다는 생각에 조심하는 편이다.",
    "rev": "1"
  },
  26: {
    "num": "26",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 내가 화난 이유를 자녀에게 잘 설명해 주는 편이다.",
    "rev": "1"
  },
  27: {
    "num": "27",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 자녀에게 무조건 지시하기보다는 왜 그래야 하는지 설명해 주는 편이다. ",
    "rev": "1"
  },
  28: {
    "num": "28",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 자녀의 의견을 존중해 주는 부모이다.",
    "rev": "1"
  },
  29: {
    "num": "29",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 자녀가 아직 어려서 그렇게 행동할 수밖에 없다는 것을 이해하는 편이다..",
    "rev": "1"
  },
  30: {
    "num": "30",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 자녀가 잘못했을 때 잘못한 점을 깨달을 수 있도록 설명하고 지도하는 것이 어렵다.",
    "rev": "0"
  },
  31: {
    "num": "31",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 자녀가 정해진 일과를 원활하게 수행하도록 자주 점검한다.",
    "rev": "1"
  },
  32: {
    "num": "32",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 자녀가 어떤 생각을 갖고 있는지 파악하기 어렵다.",
    "rev": "0"
  },
  33: {
    "num": "33",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 양육을 통해 얻는 만족감이 크다.",
    "rev": "1"
  },
  34: {
    "num": "34",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 부모라는 역할에 대해 종종 긴장, 불안 등 부담감을 느낀다.",
    "rev": "0"
  },
  35: {
    "num": "35",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 자녀를 돌볼 때 내가 부모로써 유능하며 매우 잘 하고 있다고 느낀다.",
    "rev": "1"
  },
  36: {
    "num": "36",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 다른 부모에게 자녀양육에 관한 도움을 줄 수 있을만큼 자신감이 있다.",
    "rev": "1"
  },
  37: {
    "num": "37",
    "type": "baby",
    "subtype": "EE",
    "title": "나는 자녀 양육에 있어서 생각했던 것 보다 더 많은 문제를 경험하고 있다.",
    "rev": "0"
  },
  38: {
    "num": "38",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀가 바르게 자랄 수 있도록 지도하는 것이 친밀한 관계를 유지하는 것보다 중요하다고 생각한다.",
    "rev": "0"
  },
  39: {
    "num": "39",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀가 다른 아이들에 비해 뒤쳐지지 않는 것이 중요하다고 생각한다.",
    "rev": "0"
  },
  40: {
    "num": "40",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀의 일 중에서 공부(학습)에 신경을 가장 많이 쓴다.",
    "rev": "0"
  },
  41: {
    "num": "41",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀와 친구처럼 지내는 편안한 부모가 되는 것에 높은 중요도를 둔다.",
    "rev": "1"
  },
  42: {
    "num": "42",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀가 어려운 상황을 겪고 있으면 부모로써 먼저 나서서 해결해주는 편이다.",
    "rev": "0"
  },
  43: {
    "num": "43",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀와 함께 보내는 시간이 마냥 행복하고 즐겁다.",
    "rev": "1"
  },
  44: {
    "num": "44",
    "type": "baby",
    "subtype": "IN",
    "title": "나는 자녀 양육에 대해 선배나 전문가의 조언을 크게 필요로 하지 않는다.",
    "rev": "0"
  },
  45: {
    "num": "45",
    "type": "baby",
    "subtype": "IN",
    "title": "나는 자녀를 키우는 것에 보람을 느끼지만 너무 힘들다고 느낄 때가 많다.",
    "rev": "0"
  },
  46: {
    "num": "46",
    "type": "baby",
    "subtype": "IN",
    "title": "나의 재능과 흥미는 부모 역할이 아닌 다른 분야에 있다고 느낄 때가 많다.",
    "rev": "0"
  },
  47: {
    "num": "47",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 외향적이며 활동적인 성격을 가진 사람이라는 말을 자주 듣는다.",
    "rev": "1"
  },
  48: {
    "num": "48",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 많은 사람과 함께 시간을 보내고 나면 쉽게 지치고 피로를 느낀다.",
    "rev": "0"
  },
  49: {
    "num": "49",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 여러 사람 보다는 소수의 사람들과 가깝게 지내는 편이다.",
    "rev": "0"
  },
  50: {
    "num": "50",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 다른 사람들과 대화하는 것을 좋아하는 사람이다.",
    "rev": "1"
  },
  51: {
    "num": "51",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 처음 만나는 사람과 대화하는 것이 다소 어렵게 느껴진다.",
    "rev": "0"
  },
  52: {
    "num": "52",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 누구와 대화를 하든 긴장하지 않고 편하게 이야기를 하는 편이다.",
    "rev": "1"
  },
  53: {
    "num": "53",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 모임에서 잘 모르는 사람과 눈이 마주치면 먼저 인사하는 편이다.",
    "rev": "1"
  },
  54: {
    "num": "54",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 다른 사람들과 만날 때 보다 혼자 있을 때가 더 편하다.",
    "rev": "0"
  },
  55: {
    "num": "55",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 많은 사람들과 있을 때 주로 잘 아는 사람하고만 이야기하는 편이다.",
    "rev": "0"
  },
  56: {
    "num": "56",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 누구하고든 대화를 먼저 편하게 시작할 수 있다.",
    "rev": "1"
  },
  57: {
    "num": "57",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 새로운 환경에서 새로운 사람들과 어울리는 것이 힘들다.",
    "rev": "0"
  },
  58: {
    "num": "58",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 대체로 누구하고든 쉽게 어울려 지내는 편이다.",
    "rev": "1"
  },
  59: {
    "num": "59",
    "type": "ego",
    "subtype": "EI",
    "title": "나는 주변 사람이 나를 알아가는데 많은 시간이 걸린다는 이야기를 듣는다.",
    "rev": "0"
  },
  60: {
    "num": "60",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 내 삶에 대한 평온함과 균형감이 있다.",
    "rev": "1"
  },
  61: {
    "num": "61",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 내 안에 조화로운 느낌이나 평안감이 있다.",
    "rev": "1"
  },
  62: {
    "num": "62",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 내 자신에 대해 좋은 느낌을 갖는다.",
    "rev": "1"
  },
  63: {
    "num": "63",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 자가치유력이 있다고 느낀다.",
    "rev": "1"
  },
  64: {
    "num": "64",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 현재의 신체적 혹은 심리적 상태를 스스로 극복할 수 있는 힘이 없다.",
    "rev": "0"
  },
  65: {
    "num": "65",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 지금까지 내 삶에 대해 느끼는 성취감이 있다.",
    "rev": "1"
  },
  66: {
    "num": "66",
    "type": "ego",
    "subtype": "SS",
    "title": "내가 해석하는 스스로의 삶의 의미는 나에게 평온함을 가져다 준다.",
    "rev": "1"
  },
  67: {
    "num": "67",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 매일 아침 보내게 될 하루에 대한 기대감이 없다.",
    "rev": "0"
  },
  68: {
    "num": "68",
    "type": "ego",
    "subtype": "RR",
    "title": "나는 어려운 상황을 겪을 때 내재하는 힘 보다 외적인 것(사람, 자원 등)을 의지한다.",
    "rev": "0"
  },
  69: {
    "num": "69",
    "type": "ego",
    "subtype": "RR",
    "title": "나는 삶의 불확실성을 해결하는 것은 내면적 의지보다 환경과 상황이 더 중요한 역할을 한다고 생각한다.",
    "rev": "0"
  },
  70: {
    "num": "70",
    "type": "ego",
    "subtype": "RR",
    "title": "묵상(기도), 산책, 명상 등은 내 삶에서 중요한 부분이다.",
    "rev": "1"
  },
  71: {
    "num": "71",
    "type": "ego",
    "subtype": "RI",
    "title": "내 삶은 중요한 의미와 목표 보다는 하루 하루 살아가는 현실적인 것들에 초점이 있다.",
    "rev": "0"
  },
  72: {
    "num": "72",
    "type": "ego",
    "subtype": "RI",
    "title": "내가 현재 하고 있는 일은 나의 가치와 신념보다는 주어진 상황에서 할 수밖에 없는 일이다.",
    "rev": "0"
  },
  73: {
    "num": "73",
    "type": "ego",
    "subtype": "RI",
    "title": "나는 내가 현재 하고 있는 일이 사회적으로 더 큰 의미를 포함하고 있다고 생각한다.",
    "rev": "1"
  },
  74: {
    "num": "74",
    "type": "ego",
    "subtype": "RI",
    "title": "나는 내 인생에 대한 목표와 계획을 가지고 있다.",
    "rev": "1"
  },
  75: {
    "num": "75",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 옳고 그른 것을 명확히하고 바른 행동을 하는 것이 중요하다고 생각한다.",
    "rev": "0"
  },
  76: {
    "num": "76",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 내가 개인적으로 달성하고자 하는 목표에 대한 계획과 믿음이 있다.",
    "rev": "0"
  },
  77: {
    "num": "77",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 갈등과 마찰이 생기는 상황을 만들지 않기 위해 내 의견을 잘 이야기 하지 않는편이다.",
    "rev": "1"
  },
  78: {
    "num": "78",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 내가 손해보는 상황에서도 올바른 가치를 추구해야 한다고 생각한다.",
    "rev": "1"
  },
  79: {
    "num": "79",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 내가 속한 곳(가정, 조직, 모임, 팀 등)의 성장을 위해 헌신하고 있다고 생각한다.",
    "rev": "1"
  },
  80: {
    "num": "80",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 반대의견을 주장하는 사람 앞에서도 내 의견을 적극적으로 주장한다.",
    "rev": "0"
  },
  81: {
    "num": "81",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 싫은 것에 대한 의사표시를 분명하게 하는 편이다.",
    "rev": "0"
  },
  82: {
    "num": "82",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 너무 많은 사람을 배려하면 목표를 달성하기 힘들다고 생각한다.",
    "rev": "0"
  },
  83: {
    "num": "83",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 다른 사람의 부족한 점을 찾아내고 개선할 수 있는 방법을 잘 알려준다.",
    "rev": "1"
  },
  84: {
    "num": "84",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 개인적인 목표 달성이 사회를 더 좋게 만드는 것보다 중요한 사람이다.",
    "rev": "0"
  },
  85: {
    "num": "85",
    "type": "relation",
    "subtype": "SG",
    "title": "나는 개인의 목표 달성을 위한 계획을 꾸준히 실천하고 있는 편이다.",
    "rev": "0"
  },
  86: {
    "num": "86",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 거의 모든 사람들에게 친절하려고 노력하는 편이다.",
    "rev": "1"
  },
  87: {
    "num": "87",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 타인의 입장과 처지를 잘 이해해 주는 사람이다.",
    "rev": "1"
  },
  88: {
    "num": "88",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 어떠한 상황에서 타인의 관점을 크게 고려하지는 않는 편이다.",
    "rev": "0"
  },
  89: {
    "num": "89",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 다른 사람을 비판하기보다 이해하려 노력하는 편이다.",
    "rev": "1"
  },
  90: {
    "num": "90",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 좋고 싫은 것을 명확히 표현하는 성격으로 관계가 불편해진 적이 있다.",
    "rev": "0"
  },
  91: {
    "num": "91",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 다른 사람의 이야기를 잘 듣고 그들을 이해하는 것이 것이 당연하다고 생각한다.",
    "rev": "1"
  },
  92: {
    "num": "92",
    "type": "relation",
    "subtype": "CA",
    "title": "나는 누군가에게 언성을 높이거나 화내는 경우가 거의 없다.",
    "rev": "1"
  },
  93: {
    "num": "93",
    "type": "relation",
    "subtype": "SL",
    "title": "나는 나의 동료가 어려운 상황에 처했을 때 함께 공감하고 아픔을 느낀다.",
    "rev": "1"
  },
  94: {
    "num": "94",
    "type": "relation",
    "subtype": "SL",
    "title": "나는 동료의 개인적인 관심사와 필요에 대해서는 크게 신경쓰지 않는다.",
    "rev": "0"
  },
  95: {
    "num": "95",
    "type": "relation",
    "subtype": "SL",
    "title": "나는 타인의 입장과 상황에 대해 깊이 이해하는 유형의 사람은 아니다.",
    "rev": "0"
  },
  96: {
    "num": "96",
    "type": "relation",
    "subtype": "SL",
    "title": "나는 내가 하는 일을 통해 다른 사람에게 어떤 영향력을 끼치는지 잘 모르겠다.",
    "rev": "0"
  },
  97: {
    "num": "97",
    "type": "work",
    "subtype": "BM",
    "title": "나는 새로운 일을 시작할 때 생각이나 의견을 먼저 제안하는 편이다.",
    "rev": "1"
  },
  98: {
    "num": "98",
    "type": "work",
    "subtype": "BM",
    "title": "나는 어떤 상황에서도 나의 의견과 생각을 정확하게 전달하는 것은 매우 중요하다고 생각한다.",
    "rev": "1"
  },
  99: {
    "num": "99",
    "type": "work",
    "subtype": "BM",
    "title": "나는 나와 의견이 다른 사람과 대화를 할 때 나의 관점과 입장을 세세하게 잘 설명한다.",
    "rev": "1"
  },
  100: {
    "num": "100",
    "type": "work",
    "subtype": "BM",
    "title": "나는 사람들과 대화를 할 때 주로 대화를 주도하는 편이다.",
    "rev": "1"
  },
  101: {
    "num": "101",
    "type": "work",
    "subtype": "SA",
    "title": "나는 예측하기 어려운 변화가 발생하지 않는 안정적인 환경을 선호한다.",
    "rev": "1"
  },
  102: {
    "num": "102",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 부모가 되는 것이 인생에서 반드시 경험해봐야 하는 일이라고 생각하지는 않는다.",
    "rev": "1"
  },
  103: {
    "num": "103",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 부모가 되는 일을 통해 이전보다 더 성숙한 사람으로 성장해가고 있다고 생각한다.",
    "rev": "1"
  },
  104: {
    "num": "104",
    "type": "baby",
    "subtype": "CM",
    "title": "나는 부모로써 개인적인 것을 포기하고 자녀에게 헌신하는 것이 바람직한 부모상이라고 생각한다.",
    "rev": "1"
  },
  105: {
    "num": "105",
    "type": "baby",
    "subtype": "SI",
    "title": "나는 자녀의 교육이 평균에 미치지 못하더라도 성향과 기질에 따라 달라져야한다고 생각한다",
    "rev": "1"
  },
  106: {
    "num": "106",
    "type": "ego",
    "subtype": "SS",
    "title": "나는 스스로 자존감이 높은 사람이라고 생각한다",
    "rev": "1"
  },
  107: {
    "num": "107",
    "type": "ego",
    "subtype": "RI",
    "title": "나는 지금 당장 실현할 수 없더라도 이상적인 꿈과 목표를 가지고 있다.",
    "rev": "1"
  },
  108: {
    "num": "108",
    "type": "relation",
    "subtype": "SL",
    "title": "나는 공감능력이 뛰어난 사람이라는 이야기를 자주 듣는다",
    "rev": "1"
  },
}
var A_list = {
  "BM_B": {
    "title": "당신의 '일' 유형은...",
    "name": "'일'에서 보스형' 인 당신은...",
    "explain": "보스형 설명글이 들어갑니다."
  },
  "BM_M": {
    "title": "당신의 '일' 유형은...",
    "name": "'일'에서 '멤버형'인 당신은...",
    "explain": "멤버형 설명글이 들어갑니다."
  },
  "SA_S": {
    "name": "안정추구형",
    "explain": "안정추구형 설명글이 들어갑니다."
  },
  "SA_A": {
    "name": "모험추구형",
    "explain": "모험추구형 설명글이 들어갑니다."
  },
  "AN_A": {
    "name": "기존방식선호",
    "explain": "기존방식선호 설명글이 들어갑니다."
  },
  "AN_N": {
    "name": "새로움선호",
    "explain": "새로움선호 설명글이 들어갑니다."
  },
  "CM_C": {
    "title": "당신의 '육아' 유형은...",
    "name": "'육아'에서 '자녀 우선형'인 당신은...",
    "explain": "자녀우선형 설명글이 들어갑니다."
  },
  "CM_M": {
    "title": "당신의 '육아' 유형은...",
    "name": "'육아'에서 '자기 우선형'인 당신은...",
    "explain": "자신우선형 설명글이 들어갑니다."
  },
  "EE_E1": {
    "name": "육아효능감",
    "explain": "육아효능감 1 설명글이 들어갑니다."
  },
  "EE_E2": {
    "name": "육아효능감",
    "explain": "육아효능감 2 설명글이 들어갑니다."
  },
  "SI_S": {
    "name": "학습",
    "explain": "학습 설명글이 들어갑니다."
  },
  "SI_I": {
    "name": "부모자녀관계",
    "explain": "부모자녀관계 설명글이 들어갑니다."
  },
  "IN_I": {
    "name": "육아관심",
    "explain": "육아관심1 설명글이 들어갑니다."
  },
  "IN_N": {
    "name": "육아관심",
    "explain": "육아관심2 설명글이 들어갑니다."
  },
  "EI_E": {
    "title": "당신의 '자아' 유형은...",
    "name": "'자아'에서 '외향형'이며 ",
    "explain": "외향형 설명글이 들어갑니다."
  },
  "EI_I": {
    "title": "당신의 '자아' 유형은...",
    "name": "'자아'에서 '내향형'이며 ",
    "explain": "내향형 설명글이 들어갑니다."
  },
  "SS_S1": {
    "name": "자존감",
    "explain": "자존감1 설명글이 들어갑니다."
  },
  "SS_S2": {
    "name": "자존감",
    "explain": "자존감2 설명글이 들어갑니다."
  },
  "RR_R1": {
    "name": "내적자원",
    "explain": "내적자원1 설명글이 들어갑니다."
  },
  "RR_R2": {
    "name": "내적자원",
    "explain": "내적자원2 설명글이 들어갑니다."
  },
  "RI_R": {
    "name": "현실",
    "explain": "현실 설명글이 들어갑니다."
  },
  "RI_I": {
    "name": "이상",
    "explain": "이상 설명글이 들어갑니다."
  },
  "SG_S": {
    "title": "당신의 '관계' 유형은...",
    "name": "'관계'에서 '개인형'인 당신은...",
    "explain": "개인형 설명글이 들어갑니다."
  },
  "SG_G": {
    "title": "당신의 '관계' 유형은...",
    "name": "'관계'에서 '집단형'인 당신은...",
    "explain": "집단형 설명글이 들어갑니다."
  },
  "CA_C": {
    "name": "타인이해",
    "explain": "타인이해 설명글이 들어갑니다."
  },
  "CA_A": {
    "name": "자기주장",
    "explain": "자기주장 설명글이 들어갑니다."
  },
  "SL_S": {
    "name": "타인공감",
    "explain": "타인공감1 설명글이 들어갑니다."
  },
  "SL_L": {
    "name": "타인공감",
    "explain": "타인공감2 설명글이 들어갑니다."
  },
}

var q_list_ran = new Array();

for (r = 0; r < 108; r++) {
  q_list_ran[r] = r + 1;
}

for (r = 0; r < 108; r++) {
  var q_ran = q_list_ran.splice(Math.floor(Math.random() * q_list_ran.length), 1)[0];
  q_list_ran.push(q_ran);
}


$("#one").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 5);
    console.log(parseInt(preValue) + 5);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 1);
    console.log(parseInt(preValue) + 1);
  }
  num++;
  next();
})

$("#two").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 4);
    console.log(parseInt(preValue) + 4);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 2);
  }
  num++;
  next();
})

$("#three").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 3);
    console.log(parseInt(preValue) + 3);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 3);
    console.log(parseInt(preValue) + 3);
  }
  num++;
  next();
})

$("#four").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 2);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 4);
    console.log(parseInt(preValue) + 4);
  }
  num++;
  next();
})

$("#five").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 1);
    console.log(parseInt(preValue) + 1);
  }

  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 5);
    console.log(type);
    console.log(parseInt(preValue) + 5);
  }
  num++;
  next();
})


var A = 0,
  Fix1 = 0,
  B = 0,
  Fix2 = 0,
  C = 0,
  Fix3 = 0,
  D = 0,
  Fix4 = 0,
	m4,
  numper = 0;


function next() {
  if (num == 107) {
    $(".second").hide();
    $(".pgs-s").hide();
    $(".result").show();
    var res = "",
      res1 = "",
      res2 = "",
      res3 = "",
      res4 = "",
      res5 = "",
      res6 = "",
      res7 = "",
      res8 = "",
      res9 = "",
      res10 = "",
      res11 = "",
      res12 = "",
      res13 = "";
    ($("#BM").val() <= 22) ? res += "BM_M": res += "BM_B";
    $(".yap1").html(A_list[res]["name"]);
    $(".explain").html(A_list[res]["explain"]);
    A = $("#BM").val();
    Fix1 = (100 / 45 * A);
    if (res == "BM_B") {
      $(".sub").attr('style', 'color:seagreen;');
      $(".worker_bar").attr('style', 'width: '
        + Fix1.toFixed(0) + '%;background-color:seagreen;');
      $(".worker_bar").html(Fix1.toFixed(0) / 2 + '%');
    }
    Fix1 = 100 - (100 / 45 * A);

    if (res == "BM_M") {
      $(".sub2").attr('style', 'color:seagreen;');
      $(".left-bar").attr('class', 'right-bar');
      $(".worker_bar").attr('class', 'worker_bar_right');
      $(".worker_bar_right").attr('style', 'width: '
        + Fix1.toFixed(0) + '%;background-color:seagreen;');
      $(".worker_bar_right").html(Fix1.toFixed(0) / 2 + '%');
    }


    ($("#SA").val() <= 22) ? res1 += "SA_A": res1 += "SA_S";
    $(".explain1").html(A_list[res1]["explain"]);
    ($("#AN").val() <= 22) ? res2 += "AN_N": res2 += "AN_A";
    $(".explain2").html(A_list[res2]["explain"]);
    ($("#CM").val() <= 27) ? res3 += "CM_M": res3 += "CM_C";
    $(".yap2").html(A_list[res3]["name"]);
    $(".explain3").html(A_list[res3]["explain"]);
    B = $("#CM").val();
    console.log(B);
    Fix2 = (100 / 55 * B);
    if (res3 == "CM_C") {
      $(".sub_1").attr('style', 'color:salmon;');
      $(".baby_bar").attr('style', 'width: ' + Fix2.toFixed(0) + '%;background-color:salmon;');
      $(".baby_bar").html(Fix2.toFixed(0) / 2 + '%');
    }
    Fix2 = 100 - (100 / 55 * B);
    console.log(Fix2);
    if (res3 == "CM_M") {
      $(".sub2_1").attr('style', 'color:salmon;');
      $(".left-bar1").attr('class', 'right-bar1');
      $(".baby_bar").attr('class', 'baby_bar_right');
      $(".baby_bar_right").attr('style', 'width:  ' + Fix2.toFixed(0) + '%;background-color:salmon;');
      $(".baby_bar_right").html(Fix2.toFixed(0) / 2 + '%');
    }


    ($("#EE").val() <= 17) ? res4 += "EE_E2": res4 += "EE_E1";
    $(".explain4").html(A_list[res4]["explain"]);
    ($("#SI").val() <= 17) ? res5 += "SI_I": res5 += "SI_S";
    $(".explain5").html(A_list[res5]["explain"]);
    ($("#IN").val() <= 7) ? res6 += "IN_N": res6 += "IN_I";
    $(".explain6").html(A_list[res6]["explain"]);
    ($("#EI").val() <= 22) ? res7 += "EI_I": res7 += "EI_E";
    $(".yap3").html(A_list[res7]["name"]);
    $(".explain7").html(A_list[res7]["explain"]);
    C = $("#EI").val();
    Fix3 = 100 / 65 * C;
    if (res7 == "EI_E") {
      $(".sub_2").attr('style', 'color:mediumslateblue;');
      $(".right-bar2").attr('class', 'left-bar2');
      $(".ego_bar").attr('style', 'width: ' + Fix3.toFixed(0) + '%;background-color:mediumslateblue;');
      $(".ego_bar").html(Fix3.toFixed(0) / 2 + '%');
    }
    Fix3 = 100 - (100 / 65 * C);
    if (res7 == "EI_I") {
      $(".sub2_2").attr('style', 'color:mediumslateblue;');
      $(".right-bar1").attr('class', 'right-bar');
      $(".ego_bar_right").attr('style', 'width: ' + Fix3.toFixed(0) + '%;background-color:mediumslateblue;');
      $(".ego_bar_right").html(Fix3.toFixed(0) / 2 + '%');
    }

    ($("#SS").val() <= 22) ? res8 += "SS_S2": res8 += "SS_S1";
    $(".explain8").html(A_list[res8]["explain"]);
    ($("#RR").val() <= 7) ? res9 += "RR_R2": res9 += "RR_R1";
    $(".explain9").html(A_list[res9]["explain"]);
    ($("#RI").val() <= 9) ? res10 += "RI_I": res10 += "RI_R";
    $(".explain10").html(A_list[res10]["explain"]);
    ($("#SG").val() <= 27) ? res11 += "SG_G": res11 += "SG_S";
    $(".yap4").html(A_list[res11]["name"]);
    $(".explain11").html(A_list[res11]["explain"]);
    D = $("#SG").val();
    Fix4 = 100 / 55 * D;
    if (res11 == "SG_S") {
      $(".sub_3").attr('style', 'color:orange;');
      $(".right-bar3").attr('class', 'left-bar3');
      $(".relation_bar").attr('style', 'width: ' + Fix4.toFixed(0) + '%;background-color:orange;');
      $(".relation_bar").html(Fix4.toFixed(0) / 2 + '%');
    }
    Fix4 = 100 - (100 / 55 * D);
    if (res11 == "SG_G") {
      $(".sub2_3").attr('style', 'color:orange;');
      $(".relation_bar").attr('class', 'relation_bar_right');
      $(".relation_bar_right").attr('style', 'width: ' + Fix4.toFixed(0) + '%;background-color:orange;');
      $(".relation_bar_right").html(Fix4.toFixed(0) / 2 + '%');
    }
    ($("#CA").val() <= 17) ? res12 += "CA_A": res12 += "CA_C";
    $(".explain12").html(A_list[res12]["explain"]);
    ($("#SL").val() <= 12) ? res13 += "SL_L": res13 += "SL_S";
    $(".explain13").html(A_list[res13]["explain"]);
    console.log(A + res + Fix1.toFixed(0) + B + res3 + Fix2.toFixed(0) + C + res7
      + Fix3.toFixed(0) + D + res11 + Fix4.toFixed(0));

	if(res=="BM_B" && res3=="CM_C" && res7=="EI_E" && res11=="SG_S"){
		$(".nn").html(n_list["n1"]["name"]);
		m4= new M4BT(n_list["n1"]["name"]);

	}  
	  else if(res=="BM_B" && res3=="CM_C" && res7=="EI_E" && res11=="SG_G"){
		$(".nn1").html(n_list["n2"]["name"]);
		  m4= new M4BT(n_list["n2"]["name"]);
	}
	   else if(res=="BM_B" && res3=="CM_C" && res7=="EI_I" && res11=="SG_S"){
		$(".nn1").html(n_list["n3"]["name"]);
		   m4= new M4BT(n_list["n3"]["name"]);
	}
	   else if(res=="BM_B" && res3=="CM_C" && res7=="EI_I" && res11=="SG_G"){
		$(".nn1").html(n_list["n4"]["name"]);
		   m4= new M4BT(n_list["n4"]["name"]);
	}
	   else if(res=="BM_B" && res3=="CM_M" && res7=="EI_E" && res11=="SG_S"){
		$(".nn1").html(n_list["n5"]["name"]);
		   m4= new M4BT(n_list["n5"]["name"]);
	}
	   else if(res=="BM_B" && res3=="CM_M" && res7=="EI_E" && res11=="SG_G"){
		$(".nn1").html(n_list["n6"]["name"]);
		   m4= new M4BT(n_list["n6"]["name"]);
	}
	   else if(res=="BM_B" && res3=="CM_M" && res7=="EI_I" && res11=="SG_S"){
		$(".nn1").html(n_list["n7"]["name"]);
		   m4= new M4BT(n_list["n7"]["name"]);
	}
	   else if(res=="BM_B" && res3=="CM_M" && res7=="EI_I" && res11=="SG_G"){
		$(".nn1").html(n_list["n8"]["name"]);
		   m4= new M4BT(n_list["n8"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_C" && res7=="EI_E" && res11=="SG_S"){
		$(".nn1").html(n_list["n9"]["name"]);
		   m4= new M4BT(n_list["n9"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_C" && res7=="EI_E" && res11=="SG_G"){
		$(".nn1").html(n_list["n10"]["name"]);
		   m4= new M4BT(n_list["n10"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_C" && res7=="EI_I" && res11=="SG_S"){
		$(".nn1").html(n_list["n11"]["name"]);
		   m4= new M4BT(n_list["n11"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_C" && res7=="EI_I" && res11=="SG_G"){
		$(".nn1").html(n_list["n12"]["name"]);
		   m4= new M4BT(n_list["n12"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_M" && res7=="EI_E" && res11=="SG_S"){
		$(".nn1").html(n_list["n13"]["name"]);
		   m4= new M4BT(n_list["n13"]["name"]);
	} else if(res=="BM_M" && res3=="CM_M" && res7=="EI_E" && res11=="SG_G"){
		$(".nn1").html(n_list["n14"]["name"]);
		m4= new M4BT(n_list["n14"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_M" && res7=="EI_I" && res11=="SG_S"){
		$(".nn1").html(n_list["n15"]["name"]);
		   m4= new M4BT(n_list["n15"]["name"]);
	}
	   else if(res=="BM_M" && res3=="CM_M" && res7=="EI_I" && res11=="SG_G"){
		$(".nn1").html(n_list["n16"]["name"]);
		   m4= new M4BT(n_list["n16"]["name"]);
	}
	 
	  console.log(Last_data);
	  
  } else {


    numper = 100 / 108 * num;
    $(".progress-bar").attr('style', 'width: calc(100/108*' + num + '%)');
    $(".pgs-bar").html(numper.toFixed(0) + '%');

    $("#question-content").html(q_list[q_list_ran[num]]["title"]);
    $("#type").val(q_list[q_list_ran[num]]["subtype"]);
  }
}
