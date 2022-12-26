let = name = 'SAMSUNG STORE'
//클래스 = 작업지시서, 누가 와서 만들던 이 작업지시서만 확인하면 됨

//name, price가 중복되니 반복 넘시러........ = 객체를 만들기 시작
class Product { // 추상화
  name='';
  price=0;
  color=''
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  getPrice(){
    return this.price + "만원";
  }
}

//이 TV는 Product 
class TV extends Product{
  //상속
  size='' 
  constructor(name, price, size){ 
    //생성자
    //클래스에 있는 속성값을 초기화 시켜주는 기능
    super(name, price)//상위 클래스 호출할때 씀
    //상속한 Product를 부름
    this.size=size
    //this를 씀으로써 이 생성자의 매개변수를 가리킴.
  }
  setPrice(price){
    if(price<0){
      throw Error('마이너스값 앙대!!!!')
    }
    this.price = price;
  }
  //속성과 관련있는 함수를 같이 정의해줄 수 있음
} //캡슐화


let tv1 = new TV('taehyeon tv',200,'56inch')
tv1.setPrice(-1000)
// 마이너스값 앙대!!!!
let tv2 = new TV('ultra tv', 500, '27inch')
console.log(tv1.getPrice(),tv2.getPrice())
//유저가 직접적으로 뭔가 민감한 변수에 접근하는것을 차단할수 있음
//제약사항도 
class AC extends Product{
  type='';
}

class Laptop extends Product{ //상속
  weight=0;
}


//size를 안적었는데 코드도 길고 실수도 할수 있음
//반복되고 노가다스럽고 이런일을 참을수 없음
//실수가 날 수 있는 가능성을 열어둘수 없다! 욕먹는건 우리니까...

//이미 우리가 엄청 쓰고있었음!!!!!!! 객체지향 참 쉽죠!?!?!

let array=[3,2,1]
let array2 = new Array(3,2,1)
array2.sort()
array2.map()
