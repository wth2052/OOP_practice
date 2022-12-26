/** Polymorphism **/
class Employee {
    constructor(name) { this.name = name; }
  
    buy() { console.log(`${this.constructor.name} 클래스의 ${this.name}님이 물건을 구매하였습니다.`); }
  }
  
  class User {
    constructor(name) { this.name = name; }
  
    buy() { console.log(`${this.constructor.name} 클래스의 ${this.name}님이 물건을 구매하였습니다.`); }
  }
  //각각 하나의 인스턴스를 만듬
  const employee1 = new Employee("태현");
  const employee2 = new Employee("김창환");
  const user1 = new User("이태강");
  const user2 = new User("김민수");
  // 인스턴스를 배열 상태로 담아줌
  const polymorphismArray = [employee1, employee2, user1, user2];
  // polymorphismArray에 저장되어 있는 Employee, User 인스턴스들의 buy 메소드를 호출합니다.
  //forEach배열 요소에 대해 제공된 함수를 한 번 실행
  polymorphismArray.forEach((polymorphism) => polymorphism.buy());
  
  // Employee 클래스의 태현님이 물건을 구매하였습니다.
  // Employee 클래스의 김창환님이 물건을 구매하였습니다.
  // User 클래스의 이태강님이 물건을 구매하였습니다.
  // User 클래스의 김민수님이 물건을 구매하였습니다.


  //결론적으로 Employee클래스의 buy User클래스의 buy가 메소드 명과 파라미터들은 똑같지만
  // 내부적으로 동작하는 코드는 다르게 구현될 수 있다.