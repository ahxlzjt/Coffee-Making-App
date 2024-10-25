# Coffee-Making-App
React Native를 사용하여 다양한 커피 음료를 만드는 인터페이스를 구현한 코드.

화면 구성: 각 커피 음료(에스프레소, 마키아또, 아메리카노 등)마다 End_음료이름과 Make_음료이름 컴포넌트가 있음.
상태 관리: useState 훅을 사용하여 음료의 재료가 추가되었는지를 추적합니다. 특정 버튼을 클릭하면 음료의 이미지를 변경하고 다음 화면으로 이동함.
상호작용: 사용자가 재료를 추가하는 버튼을 터치할 때마다 alert로 잘못된 선택에 대한 메시지를 표시함.
내비게이션: TouchableOpacity 컴포넌트를 사용하여 사용자가 버튼을 클릭할 때 다른 화면으로 이동할 수 있게 함.

![image](https://github.com/user-attachments/assets/10db0fde-b65b-4f8e-a206-6c724fdef852)

첫 번째 화면인 home 화면으로, Click을 누를 시 menu 화면으로 넘어간다.

![image](https://github.com/user-attachments/assets/73a89ad7-cf8d-4357-a567-cfd24ca8067b)

두 번째 화면인 menu 화면으로, 원하는 메뉴를 누르면 된다.

![image](https://github.com/user-attachments/assets/b0f69189-420b-46bd-8dfa-417332c48fa7)

예를 들어, 에스프레소를 누르면 에스프레소에 대한 간단한 설명과 제조 방법이 나와있으며 이해 시에 click 버튼을 누르면 만들기로 넘어간다.

![image](https://github.com/user-attachments/assets/a2608f20-f19a-4cc9-a7c1-ae298acc2811)

![image](https://github.com/user-attachments/assets/c00ac4f3-d49d-4a99-8077-85070b138b43)

순서대로 화면에 보이는 재료를 클릭하면 컵에 내용물이 바뀌면서 제조하는 과정을 볼 수 있다.
이 때, 들어가지 않는 재료를 선택하면 alert가 나온다.
또한 제조를 미처 하지 못하고 완성!을 누를 시에, 전 화면으로 넘어가 다시 설명을 보게된다.

![image](https://github.com/user-attachments/assets/b33de0f3-4936-483e-9091-ecc7f4d13d9e)
![image](https://github.com/user-attachments/assets/3bb4b421-bba3-4e1a-85b5-a37db758e5b1)
![image](https://github.com/user-attachments/assets/c5994c98-240f-4e4c-a634-80f36de12e9b)
![image](https://github.com/user-attachments/assets/40ba375c-6a5f-4a3c-b57f-9e42f8fcc449)

순서대로 재료를 선택 후 완성!을 누르게 되면 완성 화면으로 넘어갈 수 있다.

![image](https://github.com/user-attachments/assets/412df6f8-4470-4c37-8996-88fd419efe1f)

제조 순서를 지켜 완성!을 눌렀을 때 나오는 화면이다.
Click을 누를 시에 다시 menu 화면으로 이동해 다른 커피도 만들어 볼 수 있다는 장점이 있다.

