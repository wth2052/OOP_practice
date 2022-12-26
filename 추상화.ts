/** Abstraction **/
interface Human {
    name: string;
    setName(name);
    getName();
  }
  
  
  // 인터페이스에서 상속받은 프로퍼티와 메소드는 구현하지 않을 경우 에러가 발생합니다.
  class Employee implements Human {
    constructor(public name: string) {  }
    //name이라는 변수를 선언해라. 윗줄에서 해결 (1/3)
    
    // Human 인터페이스에서 상속받은 메소드
    setName(name) { this.name = name; }
    //setName이라는 메소드를 만들어라. 윗줄에서 해결 (2/3)
    //내부에 어떤 식으로 구현되어 있는지는 인터페이스가 생각 안해도
    //단순하게 멤버변수가 선언되어 있거나 메소드들이 무조건적으로 선언되어 있는지에 대해서
    //내용만 강제하기 때문에 내부적으로 코드를 어떻게 구현하는지는 우리가 생각 안해도 됨
    //메소드들이 무조건적으로 존재한다. 라는걸 인터페이스가 유지해주는것 이기 때문에
    //내부적으로는 마음대로 코드를 구현해도 된다.


    // Human 인터페이스에서 상속받은 메소드
    getName() { return this.name; }
    //getName이라는 메소드를 만들어라. 윗줄에서 해결 (3/3) 
    //이로써 Human 인터페이스에 있는 모든 정보를 전부 다 선언한 것을 확인할수 있다.
  }
  
  const employee = new Employee("");
  employee.setName("태현"); // Employee 클래스의 name을 변경하는 setter
  console.log(employee.getName()); // Employee 클래스의 name을 조회하는 getter