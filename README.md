
# ReactNative Curved Navigation Bar

Animated Curved Navigation Bar for React Native

<img src="https://i.imgur.com/kN2eeDu.gif" width=400/>
<br/>
<img src="https://i.imgur.com/G1zYbRK.gif" width=400/>



Getting Started
---------
1 | You need to install React native Vector Icons <br/>
`npm i react-native-vector-icons`
<br/> Goto https://github.com/oblador/react-native-vector-icons to solve linking problems(if occurs).


2 | Install Rn curved navigation bar <br>
`npm i rn-curved-navigation-bar`

or

`yarn add rn-curved-navigation-bar`

Props
---------

| Prop   |     Type      |  default | description
|----------|:------------:|------:|:------|
| icons |  array | - | 5 icons name in array
| selected |    number   |   1 | initial tab icon selected
| iconColor | string |   black | nav bar icons color
|selectedIconColor| string | white | selected icon color
|mainOffSetIos| number | - | bottom offset of nav bar in ios 
|mainOffSetAndroid |number | - | bottom offset of nav bar in android
|navColor| string| #4687FD | Main navigation bar color
|cb | function | - | returns page selected id that can be mapped

### Example of using cb to change the state 

   ```javascript
   import CurvedNavBar from 'rn-curved-navigation-bar'


   <CurvedNavBar icons={['air-horn','alarm','android-auto','auto-fix','bell-ring']} 
   navColor={'#482ff7'}
   cb={(id)=>{this.setState({page:id})}} //change the parent's state of page 
   />
   ```


### Todo features
👉🏼To implement change tab from foreign component<br/>
👉🏼To fix for less than 5 icons<br/>
👉🏼more styles and customize option<br/>
