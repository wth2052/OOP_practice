/** Inheritance **/
class Mother { // Mother 부모 클래스
    constructor(name, age, tech) { // 부모 클래스 생성자
      this.name = name;
      this.age = age;
      this.tech = tech;
    }
    getTech(){ return this.tech; } // 부모 클래스 getTech 메서드
  }
  
  class Child extends Mother{ // Mother 클래스를 상속받은 Child 자식 클래스
    //extends = 상속 선언
    constructor(name, age, tech) { // 자식 클래스 생성자
      super(name, age, tech); 
      //상속을 받은 자식 클래스에서는 super라는 문법으로
      //부모 클래스의 생성자를 호출 가능.
      //자식 클래스는 생성자외 아무것도 존재하지 않으나
      //부모 클래스의 name,age,tech (멤버변수), getTech메소드를 사용할수있음
    }
  }
  
  const child = new Child("태현", "28", "Node.js");
  console.log(child.name); // 태현
  console.log(child.age); // 28
  console.log(child.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js