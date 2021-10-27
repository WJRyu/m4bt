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
    "name": "골든옐로우(EODP)"
  },
  n2: {
    "name": "인디언레드(ESDP)"
  },
  n3: {
    "name": "미스티로즈(IODP)"
  },
  n4: {
    "name": "로지브라운(ISDP)"
  },
  n5: {
    "name": "앤티크화이트(EOBP)"
  },
  n6: {
    "name": "포레스트그린(ESBP)"
  },
  n7: {
    "name": "민트크림(IOBP)"
  },
  n8: {
    "name": "라벤다브러쉬(ISBP)"
  },
  n9: {
    "name": "오렌지레드(EODR)"
  },
  n10: {
    "name": "피치퍼프(ESDR)"
  },
  n11: {
    "name": "앨리스실버(IODR)"
  },
  n12: {
    "name": "슬레이트그레이(ISDR)"
  },
  n13: {
    "name": "블루바이올렛(EOBR)"
  },
  n14: {
    "name": "파우더더쿠아즈(ESBR)"
  },
  n15: {
    "name": "콘플라워블루(IOBR)"
  },
  n16: {
    "name": "윗베이직(ISBR)"
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
    "name": "'일'에서 주도형' 인 당신은...",
    "explain": "책임감이 강한 성향으로 자신의 의견을 어필하고 설득하는 것을 잘하고 또 좋아합니다. 다른 사람의 강점을 발견하고 잠재력을 이끌어낼 수 있는 능력이 있어요. 적절하게 상대가 해야 할 일에 대해 알려주고 그들이 일을 잘 해낼 수 있도록 잘 리드합니다. 지시를 받아서 일하기보다는 주도적으로 스스로 일할 때 더 편안합니다. 자발적으로 일 할 때 에너지가 넘치고 살아있다는 기분을 느끼기도 해요. 성취 지향적으로 승진을 위해서 적극적이고 진취적으로 활동합니다. 주어진 프로젝트가 성공하기 위해서는 갈등을 피하지 않고 적극적으로 밀어붙입니다.
  다른 사람의 이야기에 쉽게 흔들리지 않습니다. 결정을 내릴 때는 여러 정보를 종합하여 결정을 내리며 이미 내려진 결정에 후회하지 않고 좋은 결과가 나올 수 있도록 활동합니다. 책임감이 강해서 주어진 업무는 깔끔하게 처리하려고 해요. 어떤 상황에서든 누가 나서야 한다고 생각되면 기꺼이 먼저 나서서 도움을 주고 일을 해결합니다.
  하지만 일을 주도하고 사람들을 이끄는 경향이 지나칠 경우엔 다소 직설적으로 표현으로 갈등이 생기는 경우가 많아요. 또 독선적으로 보일 수도 있지요. 나의 의견을 꾸준히 밀고 나가는 건 좋지만 과하면 고집을 부리는 모습이 될 수 있습니다. 나와 다른 의견이 나오면 반대한다고 느끼고 기분이 상하는 경우도 생기게 됩니다.
"
  },
  "BM_M": {
    "title": "당신의 '일' 유형은...",
    "name": "'일'에서 '반응형'인 당신은...",
    "explain": "주어진 패턴대로 일하는 것을 선호해요. 일에 대한 큰 책임보다는 자신이 할 수 있는 만큼의 업무량을 하기를 원합니다. 일을 나서서 하기보다는 최대한 내게 주어진 만큼의 일을 제대로 수행하는 걸 선호합니다.
안정적인 환경을 추구하여 개인사업보다는 직원으로 일하는 것이 더 편하며, 높은 직급보다는 평사원으로 있길 원합니다. 워라밸이 중요해 임원이 돼 많은 업무에 시달리는 것보다는 적당히 일하고 나의 시간을 갖는 것을 더 선호하기 때문입니다.
직장 내 치열한 경쟁을 좋아하지 않습니다. 주변 사람들이 일을 잘 할 수 있도록 주변에서 돌아가는 상황을 잘 캐치하고 센스 있게 도움을 줍니다. 나를 굳이 드러내지 않고 다른 사람이 빛날 수 있도록 조력할 때 활기를 느끼며 중재자로서 역할도 잘 맡습니다.
나의 의견을 주장하기보다는 주로 듣는 편이며, 의견이 다르더라도 조직 내 분위기를 흐리게 하지 않으려 넘어가는 편입니다. 모든 사람이 예라고 외치면 대세에 따라 함께 예라고 외치는 경향이죠. 흐름에 역행하지 않고 맞춰갑니다. 이런 모습으로 인해 주변에서 ‘너무 수동적이다.’ 는 평가를 받기도 합니다.
"
  },
  "SA_S": {
    "name": "안정추구형",
    "explain": "○	변화를 싫어함
○	불안정한 상황보다는 안정적인 상황을 선호함
○	불필요한 모험은 하지 않으려 함
○	계획적으로 일을 진행하는 것을 선호함
"
  },
  "SA_A": {
    "name": "모험추구형",
    "explain": "○	도전정신이 높음
○	새로운 것을 배우는 걸 선호
○	다양한 경험을 하는 것을 좋아함
○	즉흥적으로 시도하는 것도 좋아함
"
  },
  "AN_A": {
    "name": "기존방식선호",
    "explain": "○	있는 그대로 사실을 받아들이고 세부적인 사항을 잘 파악하고 현실감각이 좋은 편임
○	현실 지향적인 성향
○	바로 실무에 적용하는 데 도움이 되는 영역을 공부할 때 즐겁다
○	현실적인 문제를 다루는 활동을 선호함
"
  },
  "AN_N": {
    "name": "새로움선호",
    "explain": "○	전체를 보는 관점이 있으며 통찰력과 상상력이 뛰어남
○	미래지향적인 성향
○	어떤 하나의 상황에서 여러 가지 가능성을 보는 눈이 있고 새로운 방식으로 시도하는 걸 좋아함
○	장기적인 프로젝트에 강함
"
  },
  "CM_C": {
    "title": "당신의 '육아' 유형은...",
    "name": "'육아'에서 '헌신형'인 당신은...",
    "explain": "자녀를 정말 많이 사랑하고 아끼는 분이에요. 아이가 잘 자랄 수 있도록 모든 일을 다 할 수 있다는 마음가짐을 갖고 계시죠. 최선을 다해서 아이에게 가장 최고의 것을 해주고 싶은 마음이 강한 분이에요. 아이를 잘 양육하면서 나의 성취감을 느끼는 경향이 있습니다. 그래서 아이를 위해서 나를 희생하는 데 거리낌이 없죠. 아이의 감정과 요구에 민감하게 반응하여 아이가 필요로 하는 걸 바로 알아차리고 제공해주는 성향이에요. 아이의 행동을 주의 깊게 관찰하고 자녀와 대화하며 자녀의 생각을 존중해줍니다. 그래서 아이와 관련된 일을 결정할 때 아이와 상의하여 결정하는 경우가 많아요.
  아이를 잘 양육하며 성취감을 느끼기 때문에 자녀의 성과를 나의 성과라고 느끼기도 해요. 그래서 아이가 혼나거나 잘하지 못 하면 엄마인 내가 혼나고 못 하는 느낌이 들어 힘들어하기도 해요.
  하지만 자녀를 우선하는 경우가 지나칠 경우에는 아이가 힘들지 않기 위해 모든 걸 다 대신해 주려 하거나 아이가 원하는 걸 들어준다는 이유로 아이가 마음대로 행동하도록 두기도 해요. 지나친 과잉보호로 오히려 자녀의 독립성이 발달 되지 못하는 경우도 있어요. 자녀의 성과를 나의 성과로 여기는 부분이 과해지면 교육에 지나치게 투자를 많이 하거나, 자녀에게 많은 기대를 하게 됨으로써 오히려 자녀와의 사이가 나빠질 수도 있어요. 또한, 육아, 양육에 나의 모든 육체적, 심리적 에너지를 쏟아 정작 나의 욕구에는 무심해져 나도 모르는 불만족감을 느낄 수 있답니다. 자녀가 성장하며 점점 스스로 하는 활동이 많아지면 의도치 않게 자녀로부터 상처를 받기도 해요.
"
  },
  "CM_M": {
    "title": "당신의 '육아' 유형은...",
    "name": "'육아'에서 '균형형'인 당신은...",
    "explain": "자녀와 나를 각각 독립된 사람으로 생각해요. 아이도 중요하지만 내 삶도 중요하다! 란 생각을 갖고 있죠. 자녀가 독립적으로 활동할 수 있도록 지지합니다. 자율적인 분위기를 선호하고 아이를 믿어주고 아이가 스스로 시도해 볼 수 있는 기회를 제공해요. 나의 일에 집중하기 위해서라도 자녀가 독립적으로 활동할 수 있게 교육하는 경향이에요. 자녀의 유능감이 발달할 수 있도록 잘 지지하는 성향의 엄마예요. 내가 행복해야 자녀가 행복하다고 생각하는 성향입니다. 자녀와 논리적인 대화를 해 자녀의 지적인 발달 호기심, 과제 집착력, 도전 정신을 발달시키는 데 도움을 줍니다. 자녀들에게 주체적인 삶을 사는 여성의 모습으로 롤모델이 돼 주기도 합니다.
  자녀를 열심히 돌보고 양육하면서 꾸준히 내가 성장하길 바라서 자기계발에 많은 관심을 가져요. 진취적이고 성취 지향적인 성향으로 일과 육아 모두 잘 성취하고 싶은 마음도 커요.
  하지만 나를 생각하는 게 지나치게 될 경우에는 육아에 소홀하게 되는 경우가 있기도 해요. 은연중에 나의 일정에 아이가 무조건 맞춰야 한다고 강요할 수 있습니다. 내가 세운 계획, 일정대로 자녀가 맞추길 바라는 경우가 생기기도 해요. 스스로 일방적으로 헌신하고 희생한다고 생각할 경우 많은 스트레스를 받게 돼요. 이성적으로 생각하는 경우가 많다 보니 자녀의 감정적인 표현에 나도 모르게 무심하게 반응하기도 해요. 자녀가 의존적인 모습을 보일 때 아이가 독립적이지 못 한 모습을 보며 과하게 걱정이 되기도 합니다.
"
  },
  "EE_E1": {
    "name": "육아효능감",
    "explain": "○	즐겁게 육아를 하고 육아하는 과정이 즐겁고 만족감이 있다. 스스로 자녀를 잘 키우고 있다고 생각하며 잘 자라는 자녀를 보며 성취감을 느낀다
○	자녀 양육에 대해 자신감이 있고 자신의 양육방식에 대한 확인이 있다
○	일관적인 태도로 자녀를 대하고 훈육할 때는 엄격하게 훈육하기도 함
○	자녀를 따뜻하게 대하고 긍정적으로 바라봄
○ 자녀가 어려움을 겪을 때 무조건 문제를 해결해주는 것이 아니라 자녀가 스스로 해결할 수 있도록 적절하게 도움을 줌
"
  },
  "EE_E2": {
    "name": "육아효능감",
    "explain": "○	육아가 너무 힘들고 자신을 무능력한 부모라 여길 수 있다. 아이를 어떻게 다루고 대해야 할지 모르겠고 자녀에 대한 통제권을 잃어 휘둘릴 수 있다.
○	자녀 양육에서 일어나는 자연스러운 과정조차도 문제로 여길 수 있음. 자녀를 올바르게 훈육하는 방식에 대한 혼란.
○	비일관적인 태도로 자녀와 자신 모두가 혼란스러운 일이 발생.
○	육아, 자녀 지도에 대한 자신감이 부족하다고 느낌.
○	자녀의 올바른 성장을 위한 방법에 대한 부담감과 어려움을 느낌.
○	자녀와의 관계에서 불안함을 쉽게 느낌.
"
  },
  "SI_S": {
    "name": "관리형",
    "explain": "○	학업 성취에 많은 관심이 있다.
○	교육열이 높은 성향이다.
○	학업 성취도가 우수해야 자녀가 원하는 삶을 살 수 있다고 생각한다.
○	아이가 학업 성취를 잘 해낼 수 있도록 적극적으로 지원한다.
○	자칫 아이의 정서적인 부분, 스트레스 해소에 소홀할 수 있으니 유의해야 함.
○	자녀가 또래보다 학업적으로 뒤처지지 않는 것을 중요하게 생각한다.
"
  },
  "SI_I": {
    "name": "관계형",
    "explain": "○	자녀의 인성, 자존감에 관심이 있다.
○	자녀의 의견을 존중하고 많이 대화하려 노력한다.
○	자녀와 친밀한 관계를 갖는 것을 중요하게 여긴다.
○	아이와 함께 활동하는 것을 좋아한다.
○	자칫 학업적인 부분을 소홀히 할 수 있으니 유의해야 함.
"
  },
  "IN_I": {
    "name": "육아선호도",
    "explain": "○	자녀를 올바르게 잘 키우는 방법에 대한 관심이 많다.
○	이유식, 엄마표 놀이 등에 관심이 많을 수 있다.
○	아이를 잘 키우기 위해서라면 어떤 활동이든 할 수 있다.
"
  },
  "IN_N": {
    "name": "육아선호도",
    "explain": "○	아이는 알아서 잘 자랄 거라고 생각한다.
○	최소한의 역할만 해도 된다고 생각한다.
○	육아보다는 다른 영역에 더 관심이 많다.
"
  },
  "EI_E": {
    "title": "당신의 '자아' 유형은...",
    "name": "'자아'에서 '외향형'이며 ",
    "explain": "내 생각과 감정을 겉으로 표현해야 편한 성향으로 세상과 직접적으로 소통할 때 에너지를 많이 얻습니다. 내 주변 사물이나 사람들에게 관심이 많아요. 직접 행동으로 옮기거나 말로 표현을 하면서 생각이 정리돼요. 그래서 주변에서 봤을 때 잘 나서고 주도적인 사람으로 보이기도 합니다. 좋으면 좋다고 티가 나고 싫으면 싫다고 티가 잘 나기도 합니다. 실내에 너무 오래 갇혀 있으면 답답함을 느껴요. 사람들과 함께할 때 정말 즐겁고 충전됨을 느낍니다.
  새로운 사람을 만나도 먼저 인사하고 어색함을 깨는 경향이 있어요. 사교성이 좋고, 나라는 사람을 언어로 드러내는 것을 선호해 말로 표현하는 능력도 우수한 편이에요. 행동력, 추진력이 높은 편입니다. 나의 외부에서 일어나는 활동에는 관심이 많고 즉각적으로 알아차리지만, 마음속에서 일어나는 부분은 빨리 알아차리지 못 할 수 있어요.
  나의 의견을 외부로 표현하는 성향이다 보니 상대도 외부로 표현을 해줘야 편합니다. 나의 표현에 상대의 피드백이 적으면 불편해해요.
"
  },
  "EI_I": {
    "title": "당신의 '자아' 유형은...",
    "name": "'자아'에서 '내향형'이며 ",
    "explain": "  혼자 있을 때 편안함을 느끼는 성향입니다. 내 생각과 감정을 내 마음속에서 조용히 소화하는 걸 더 좋아해요. 여러 사람과 만나는 것보다는 소수의 사람과 지내는 게 더 편해요. 겉으로 보기에는 감정 기복이 심하지 않은 것처럼 보입니다. 굳이 내 생각과 감정을 겉으로 드러내려 하지 않기 때문이죠. 나를 표현할 때는 말보다 글로 표현하는 걸 더 선호하기도 합니다. 집순이들이 많을 수 있습니다. 외부활동보다는 실내활동을 더 좋아하기 때문이죠. 외부활동을 할 때도 혼자 조용히 할 때 만족감을 느낍니다. 여러 사람들과 만나는 자리에서도 잘 지내기는 하나 집에 돌아오면 에너지가 소진된다면 내향형일 가능성이 높습니다.
  내 마음속에서 일어나는 상태를 알아차리고 이게 나에게 어떤 의미가 있는지 가치를 파악하는 능력이 좋은 편이에요. 주된 관심은 개념, 생각, 내적 경험의 세계에 있어요. 행동하거나 말로 표현하기 전에 한 번 더 생각하고 신중하게 움직여요.
  굳이 나를 표현하지 않아도 되는 상황에서 먼저 나를 드러내지는 않지만, 나를 드러내야 하는 상황에서는 또 열정적으로 자신을 표현하기도 합니다. 내 마음속에서 일어나는 상황에 관심이 많다 보니 외부환경에서 일어나는 일에는 무덤덤하게 반응할 수 있어요.
"
  },
  "SS_S1": {
    "name": "자존감",
    "explain": "○	감정 기복이 적고 자신감에 차 있다.
○	좌절, 실패에 대한 두려움보다는 좌절이란 과정을 거치고 성공하고 발전하리란 확신이 있다. 사소한 문제나 걸림돌뿐만 아니라 큰 어려움에서도 침착하게 대처하는 경향이다.
○	자신이 이룬 성과에 대해서 과대평가하지도 과소평가하지도 않고 현실적으로 만족감을 느낀다.
○	다른 사람과 나를 비교하기보다는 나의 만족을 더 우선시한다.
○	감정에 휘둘려도 빨리 회복한다.
"
  },
  "SS_S2": {
    "name": "자존감",
    "explain": "○	작은 일에도 불안해하고 짜증을 잘 느끼는 경향이다.
○	사람들에게 인정을 받지 못 할까 봐 두려움을 느낀다.
○	실패를 끝으로 생각하고 실패를 두려워한다.
○	작은 어려움에도 포기하려는 마음이 생긴다.
○	자신의 성과에 대해 과소평가하는 경향이 있다.
○	스스로 자책하는 일이 잦다.
○	다른 사람과 비교하며 열등감을 자주 느낀다.
○	감정에 한 번 빠지면 헤어나오기 어렵다.
○	의기소침하고 자신감이 없다고 스스로 느낀다.
"
  },
  "RR_R1": {
    "name": "내적자원",
    "explain": "○	스트레스받는 일이 생기거나 어려운 상황이 생기더라도 긍정적인 방향으로 해결할 방법을 탐색한다.
○	두려움을 피하지 않고 직면하여 감정을 다스린다.
○	나의 단점을 고치려 하기보다는 나의 장점을 살리는 방향으로 생각한다.
○	필요할 때는 냉철하게 판단하고 통찰력을 발휘한다.
"
  },
  "RR_R2": {
    "name": "내적자원",
    "explain": "○	어려운 일이 생겼을 때, 어려움에 휩싸여 주저앉게 되는 경우가 있다.
○	두려움을 느낄 때 두려움을 피하려 애쓴다.
○	나의 단점을 고치기 위해서 최선을 다한다.
○	상황에 자꾸 휩쓸리는 경향이 있다.
"
  },
  "RI_R": {
    "name": "현실",
    "explain": "○	어떤 정보를 받아들일 때 사실에 기반으로 받아들이는 경항. 주변을 관찰하면서 상황을 그대로 받아들이고 관찰에 특별한 의미를 부여하지 않는다. 지금 내게 주어진 상황을 있는 그대로 받아들이는 경향으로 현재 지향적이다.
○	실용적인 걸 좋아하고 논리적 순서로 정보를 표현하는 방식이 편한 성향이다. 전통, 기존의 방식을 중요시하는 편이다.
"
  },
  "RI_I": {
    "name": "이상",
    "explain": "○	문맥 사이에 숨겨진 의미를 잘 파악하는 편이다. 관찰의 일부로서 사물을 액면 그대로 받아들이지 않는 대신 해석을 덧붙이는 편이다. 하나의 상황에서 여러 가지 가능성을 발견한다. 상황을 그대로 내버려 두기다 특정 문제에 대해 나름대로 추측한다. 어려움이 있을 듯해도 해결할 방법을 찾으려는 시도를 멈추지 않는다. 미래지향적인 성향이다.
○	사회적 가치, 패러다임 및 이슈와 같은 ‘마음’과 관련된 것들에 더 많은 가치를 부여하는 경향이 있다.
"
  },
  "SG_S": {
    "title": "당신의 '관계' 유형은...",
    "name": "'관계'에서 '개인형'인 당신은...",
    "explain": "타인에게 해를 주는 걸 별로 좋아하지 않아요. 그리고 자신도 타인에게 피해를 받는 걸 좋아하지 않아요. 자기 자신의 존재로 인정받길 원하며 자신의 자유와 개성을 누리기를 바라는 경향입니다. 마음속 깊은 곳에 나만의 선이 있어서 이 선을 넘는 걸 매우 싫어해요. 합리적이고 이성적으로 생각하는 걸 좋아해요. 어떤 상황에 대해서 객관적으로 생각하고 판단하는 경향이 있습니다. 이 판단하는 기준은 자신 내면에 있는 원칙이 기준이 됩니다.
  자신의 자율성, 독립성 그리고 자신의 결정을 중시하는 성향이에요. 내가 세운 목적, 목표, 욕구, 성취, 권리를 집단이 침해하면 매우 불편해해요. 자신 스스로 나의 기준대로 행동하고 독립적이고 자율적인 경향이 있습니다. 모두가 아니라고 할 때 예! 	라고 외칠 수 있는 용기가 있어요.
  단호하게 보이기도 하지만 합리적이고 효율적인 걸 추구하여 최대한 공정하게 행동하기 때문에 주변에서도 불만이 적습니다.
  하지만 이 성향이 지나칠 경우에는 계산적인 사람으로 보이거나 정 없는 사람처럼 보일 수 있습니다. 주변 사람들에게 관심이 적어 사람들의 감정적인 부분을 놓쳐 불필요한 오해를 받을 수 있습니다. 주고받는 게 확실해 누군가의 호의를 받을 때 ‘갚아야 한다’는 생각때문에 불편해 할 수 있어요.
"
  },
  "SG_G": {
    "title": "당신의 '관계' 유형은...",
    "name": "'관계'에서 '사회형'인 당신은...",
    "explain": "주변 사람들과 잘 협력하며 내가 속한 조직의 성공을 위해 열심히 활동하는 경향입니다. 공동체 의식을 가치 있게 생각하며 나의 조직이 잘 유지될 수 있도록 노력합니다. 공동체 안에서 조화를 중시하며 다른 조직 구성원의 요구에 관대해요. 서로서로 도움을 주고 주의 깊게 대하는 걸 선호하는 성향입니다. 누군가가 소외되는 모습을 보면 먼저 다가 소외된 사람들도 집단의 일부가 되도록 노력합니다. 모두가 조화롭게 지내는 걸 편안해해요. 내가 튀는 것보다는 조용히 나의 역할을 수행하는 성향입니다.
  나의 개인적인 이익보다는 사람들 관계가 깨지지 않는 걸 더 중요하게 생각해요. 그래서 나의 결정으로 인해 혹시 주변 사람들이 상처받을까 봐 한 번 더 생각하고 결정합니다. 모두가 만족스러운 결과를 내길 바라는 경향이에요. 다른 사람들의 의견을 잘 수용하고 공감하며, 내가 불편한 부분이 있어도 잘 참습니다. 갈등이 생기는 걸 꺼려하기에 모두가 예라고 하면 나도 예라고 하는 경향입니다. 비판보다는 따듯한 격려를 먼저 하며 상대방이 잘 한 것을 잘 발견하고 칭찬해줍니다.
  하지만 이런 성향이 지나칠 경우에는 내키지 않아도 조직 분위기를 해치지 않기 위해 자신의 의견을 계속 양보하다 보니 불만족이 쌓이게 돼요. 나의 정체성이 집단의 정체성에 의해 결정되기 때문에 집단이 해체될 경우 자존감이 많이 떨어지기도 합니다. 사람과 사이에서 갈등이 생길 경우 지나치게 스트레스를 받게 되는데요, 주변 사람을 너무 생각하느라 정작 나의 일에는 소홀해질 수 있습니다. 스트레스가 많아지면 갈등을 해결하기보다는 회피하게 되며 수동 공격적인 행동이 나타날 수 있습니다.
"
  },
  "CA_C": {
    "name": "타인이해",
    "explain": "○	다른 사람의 입장과 처지를 잘 이해하고 배려하는 마음이 있다.
○	문제가 생겼을 때 상대를 비판하기보다는 상대를 이해하는 마음을 낸다.
○	다른 사람들의 이야기를 잘 들어준다.
○	주변 사람에 대한 호기심이 많아서 그들에게 일어나는 일들을 예민하게 알아차린다.
○	다른 사람의 기분을 고려하며 나의 의견을 전달한다.
"
  },
  "CA_A": {
    "name": "자기주장",
    "explain": "○	나의 의견을 어필해야 할 때는 관계가 불편해지더라도 적극적으로 어필하는 편이다.
○	나의 의견에 대한 피드백과 상관없이 나의 의견을 잘 표현한다.
○	내 의견에 대한 확신이 강하다.
○	주변 동료들에게 어려움이 생기면 그들이 잘 해결하리라 믿고 나의 일에 집중한다.
"
  },
  "SL_S": {
    "name": "공감형",
    "explain": "○	주변 사람이 어려움을 느낄 때 빨리 알아차리고 이해와 공감이 된다.
○	사람들의 고민을 토로할 때 이야기를 들어주고 따뜻하게 위로해준다.
○	내 결정의 기준은 나의 결정에 의해 영향을 받게 될 사람들이다.
"
  },
  "SL_L": {
    "name": "객관형",
    "explain": "○	다른 사람들의 의견에 영향을 최소로 받고 사회의 보편적인 기준으로 판단한다.
○	사람들의 고민을 토로할 때 이야기를 들어주고 문제를 해결할 수 있는 가장 좋은 방법을 생각하여 제시한다.
○	내 결정의 기준은 내게 주어진 과업의 가장 효율적인 처리 방법이다.
"
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
    $("#" + type).val(parseInt(preValue) + 2);
    console.log(parseInt(preValue) + 2);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) - 2);
    console.log(parseInt(preValue) - 2);
  }
  num++;
  next();
})

$("#two").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 1);
    console.log(parseInt(preValue) + 1);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) - 1);
  }
  num++;
  next();
})

$("#three").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) + 0);
    console.log(parseInt(preValue) + 0);
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 0);
    console.log(parseInt(preValue) + 0);
  }
  num++;
  next();
})

$("#four").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) - 1 );
  }
  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 1);
    console.log(parseInt(preValue) + 1);
  }
  num++;
  next();
})

$("#five").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  if (q_list[q_list_ran[num]]["rev"] == 0) {
    $("#" + type).val(parseInt(preValue) - 2);
    console.log(parseInt(preValue) - 2);
  }

  if (q_list[q_list_ran[num]]["rev"] == 1) {
    $("#" + type).val(parseInt(preValue) + 2);
    console.log(type);
    console.log(parseInt(preValue) + 2);
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
