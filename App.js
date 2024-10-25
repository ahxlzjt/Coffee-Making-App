import React, {useState} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

var p1_st = {flex:'50%', backgroundColor: 'rgba(255,255,245,0.01)', margin:5}; 
var p2_st = {width:'31.5%' , height: 70, backgroundColor: 'rgba(255,255,245,0.01)', margin:3.5};   
var p22_st = {width:'31.5%' , height: 75, backgroundColor: 'rgba(255,255,245,0.2)', margin:3.5};  
var imgsize = {height:300, width:400, top:80, left:15};

function End_Espresso({navigation}) {
return(
   <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
     <Image style={{width:400, height:400}}
       source = {require('./assets/Espresso2.png')}/>
     <View style = {{marginTop:50}}/>
     <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 다른 것도 만들어볼까요? </Text>
     <View style = {{marginTop:10}}/>
     <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
     <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
     </TouchableOpacity>
   </View>
  )
 }

function End_Macciatto({navigation}) {
  return(
    <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
      <Image style={{width:400, height:400}}
        source = {require('./assets/Macciatto2.png')}/>
      <View style = {{marginTop:50}}/>
      <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 다른 것도 만들어볼까요? </Text>
      <View style = {{marginTop:10}}/>
      <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
      <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
      </TouchableOpacity>
    </View>
   )
  }

function End_Americano({navigation}) {
  return(
    <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
      <Image style={{width:400, height:400}}
        source = {require('./assets/Americano2.png')}/>
      <View style = {{marginTop:50}}/>
      <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 다른 것도 만들어볼까요? </Text>
      <View style = {{marginTop:10}}/>
      <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
      <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
      </TouchableOpacity>
    </View>
   )
  }

function End_Mocha({navigation}) {
  return(
    <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
      <Image style={{width:400, height:400}}
        source = {require('./assets/Mocha2.png')}/>
      <View style = {{marginTop:50}}/>
      <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 다른 것도 만들어볼까요? </Text>
      <View style = {{marginTop:10}}/>
      <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
      <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
      </TouchableOpacity>
    </View>
   )
  }

function End_Latte({navigation}) {
  return(
    <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
      <Image style={{width:400, height:400}}
        source = {require('./assets/Latte2.png')}/>
      <View style = {{marginTop:50}}/>
      <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 다른 것도 만들어볼까요? </Text>
      <View style = {{marginTop:10}}/>
      <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
      <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
      </TouchableOpacity>
    </View>
   )
  }

function End_Apocatto({navigation}) {
  return(
    <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
      <Image style={{width:400, height:400}}
        source = {require('./assets/Apocatto2.png')}/>
      <View style = {{marginTop:50}}/>
      <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 다른 것도 만들어볼까요? </Text>
      <View style = {{marginTop:10}}/>
      <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
      <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
      </TouchableOpacity>
    </View>
   )
  }

function Make_Espresso({navigation}) {

const [s, sets] = useState(0)
const [c, setc] = useState(0)

var cup = <Image style = {imgsize} source={require('./assets/cup.png')}/>;
var cup1 = <Image style = {imgsize} source={require('./assets/cup1.png')}/>;

var bt1 =
<View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
  <TouchableOpacity onPress = {function() {navigation.navigate('Espresso')}}>
  <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
  </TouchableOpacity>
</View>;

var bt11 = 
<View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
  <TouchableOpacity onPress = {function() {navigation.navigate('End_Espresso')}}>
  <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
  </TouchableOpacity>
</View>;

if (c==1) {
  cup = cup1;
  bt1=bt11;
}

  return(
    <View style = {{flex:1, backgroundColor:'rgb(255,255,245)'}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/make1.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p22_st} opacity={s} onTouchStart = {function() {sets(1); setc(1)}} onTouchEnd={function() {sets(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>  
        </View>
        <Text style = {{top:100, left:80 ,fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 순서대로 재료를 넣어주세요! </Text>
        {cup}
        {bt1}
        <View style ={{marginTop: 170}}/>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
        </View>
        </ImageBackground>
    </View>
  );
}

function Make_Macciatto({navigation}) {

  const [s, sets] = useState(0)
  const [s1, sets1] = useState(0)
  const [c, setc] = useState(0)
  const [c1, setc1] = useState(0)

  var cup = <Image style = {imgsize} source={require('./assets/cup.png')}/>;
  var cup1 = <Image style = {imgsize} source={require('./assets/cup1.png')}/>;
  var cup2 = <Image style = {imgsize} source={require('./assets/cup2.png')}/>;

  var bt1 =
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('Macciatto')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
  var bt11 = 
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('End_Macciatto')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
    
  if (c==1) {
    cup = cup1;
    if (c1==1) {
     cup = cup2;
     bt1=bt11;
    }
  }

    return(
      <View style = {{flex:1, backgroundColor:'rgb(255,255,245)'}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/make1.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p22_st} opacity={s} onTouchStart = {function() {sets(1); setc(1)}} onTouchEnd={function() {sets(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>  
        </View>
        <Text style = {{top:100, left:80 ,fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 순서대로 재료를 넣어주세요! </Text>
        {cup}
        {bt1}
        <View style ={{marginTop: 170}}/>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p22_st} opacity={s1} onTouchStart = {function() {sets1(1); setc1(1)}} onTouchEnd={function() {sets1(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
        </View>
        </ImageBackground>
    </View>
    );
  }

function Make_Americano({navigation}) {

  const [s, sets] = useState(0)
  const [s1, sets1] = useState(0)
  const [c, setc] = useState(0)
  const [c1, setc1] = useState(0)

  var cup = <Image style = {imgsize} source={require('./assets/cup.png')}/>;
  var cup1 = <Image style = {imgsize} source={require('./assets/cup1.png')}/>;
  var cup3 = <Image style = {imgsize} source={require('./assets/cup3.png')}/>;

  var bt1 =
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('Americano')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
  var bt11 = 
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('End_Americano')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
    
  if (c==1) {
    cup = cup1;
    if (c1==1) {
     cup = cup3;
     bt1=bt11;
    }
  }

    return(
      <View style = {{flex:1, backgroundColor:'rgb(255,255,245)'}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/make1.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p22_st} opacity={s} onTouchStart = {function() {sets(1); setc(1)}} onTouchEnd={function() {sets(0)}}/>  
          <View style={p22_st} opacity={s1} onTouchStart = {function() {sets1(1); setc1(1)}} onTouchEnd={function() {sets1(0)}}/> 
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>  
        </View>
        <Text style = {{top:100, left:80 ,fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 순서대로 재료를 넣어주세요! </Text>
        {cup}
        {bt1}
        <View style ={{marginTop: 170}}/>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
        </View>
        </ImageBackground>
    </View>
    );
  }

function Make_Mocha({navigation}) {

  const [s, sets] = useState(0)
  const [s1, sets1] = useState(0)
  const [s2, sets2] = useState(0)
  const [s3, sets3] = useState(0)
  const [c, setc] = useState(0)
  const [c1, setc1] = useState(0)
  const [c2, setc2] = useState(0)
  const [c3, setc3] = useState(0)

  var cup = <Image style = {imgsize} source={require('./assets/cup.png')}/>;
  var cup1 = <Image style = {imgsize} source={require('./assets/cup1.png')}/>;
  var cup41 = <Image style = {imgsize} source={require('./assets/cup41.png')}/>;
  var cup42 = <Image style = {imgsize} source={require('./assets/cup42.png')}/>;
  var cup43 = <Image style = {imgsize} source={require('./assets/cup43.png')}/>;

  var bt1 =
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('Mocha')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
  var bt11 = 
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('End_Mocha')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
    
  if (c==1) {
    cup = cup1;
    if (c1==1) {
     cup = cup41;
     if (c2==1) {
      cup = cup42;
      if (c3==1) {
        cup = cup43;
        bt1=bt11;
      }
     }
    }
  }

    return(
      <View style = {{flex:1, backgroundColor:'rgb(255,255,245)'}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/make1.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p22_st} opacity={s} onTouchStart = {function() {sets(1); setc(1)}} onTouchEnd={function() {sets(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p22_st} opacity={s2} onTouchStart = {function() {sets2(1); setc2(1)}} onTouchEnd={function() {sets2(0)}}/>  
        </View>
        <Text style = {{top:100, left:80 ,fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 순서대로 재료를 넣어주세요! </Text>
        {cup}
        {bt1}
        <View style ={{marginTop: 170}}/>
        <View style = {{flex:1, flexDirection:'row'}}>
        <View style={p22_st} opacity={s1} onTouchStart = {function() {sets1(1); setc1(1)}} onTouchEnd={function() {sets1(0)}}/> 
          <View style={p22_st} opacity={s3} onTouchStart = {function() {sets3(1); setc3(1)}} onTouchEnd={function() {sets3(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
        </View>
        </ImageBackground>
    </View>
    );
  }

function Make_Latte({navigation}) {

  const [s, sets] = useState(0)
  const [s1, sets1] = useState(0)
  const [c, setc] = useState(0)
  const [c1, setc1] = useState(0)

  var cup = <Image style = {imgsize} source={require('./assets/cup.png')}/>;
  var cup1 = <Image style = {imgsize} source={require('./assets/cup1.png')}/>;
  var cup5 = <Image style = {imgsize} source={require('./assets/cup5.png')}/>;

  var bt1 =
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('Latte')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
  var bt11 = 
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('End_Latte')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
    
  if (c==1) {
    cup = cup1;
    if (c1==1) {
     cup = cup5;
     bt1=bt11;
    }
  }

    return(
      <View style = {{flex:1, backgroundColor:'rgb(255,255,245)'}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/make1.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p22_st} opacity={s} onTouchStart = {function() {sets(1); setc(1)}} onTouchEnd={function() {sets(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p22_st} opacity={s1} onTouchStart = {function() {sets1(1); setc1(1)}} onTouchEnd={function() {sets1(0)}}/>  
        </View>
        <Text style = {{top:100, left:80 ,fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 순서대로 재료를 넣어주세요! </Text>
        {cup}
        {bt1}
        <View style ={{marginTop: 170}}/>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/> 
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
        </View>
        </ImageBackground>
    </View>
    );
  }

function Make_Apocatto({navigation}) {

  const [s, sets] = useState(0)
  const [s1, sets1] = useState(0)
  const [c, setc] = useState(0)
  const [c1, setc1] = useState(0)

  var cup = <Image style = {imgsize} source={require('./assets/cup.png')}/>;
  var cup61 = <Image style = {imgsize} source={require('./assets/cup61.png')}/>;
  var cup62 = <Image style = {imgsize} source={require('./assets/cup62.png')}/>;

  var bt1 =
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('Apocatto')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
  var bt11 = 
  <View style = {{paddingTop:30, flex:1, alignItems:'center'}}>
    <TouchableOpacity onPress = {function() {navigation.navigate('End_Apocatto')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> 완성! </Text> 
    </TouchableOpacity>
  </View>;
  
    
  if (c==1) {
    cup = cup61;
    if (c1==1) {
     cup = cup62;
     bt1=bt11;
    }
  }

    return(
      <View style = {{flex:1, backgroundColor:'rgb(255,255,245)'}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/make1.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p22_st} opacity={s1} onTouchStart = {function() {sets1(1); setc1(1)}} onTouchEnd={function() {sets1(0)}}/>  
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>
        </View>
        <Text style = {{top:100, left:80 ,fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 순서대로 재료를 넣어주세요! </Text>
        {cup}
        {bt1}
        <View style ={{marginTop: 170}}/>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/> 
          <View style={p2_st} onTouchStart = {function() {alert('다시 생각해보세요!')}}/>  
          <View style={p22_st} opacity={s} onTouchStart = {function() {sets(1); setc(1)}} onTouchEnd={function() {sets(0)}}/>  
        </View>
        </ImageBackground>
    </View>
    );
  }

function Espresso({navigation}) {
  return(
  <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
    <Image style={{width:400, height:400}}
      source = {require('./assets/Espresso1.png')}/>
    <View style = {{marginTop:50}}/>
    <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 이해했어요! </Text>
    <View style = {{marginTop:10}}/>
    <TouchableOpacity onPress = {function() {navigation.navigate('Make_Espresso')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
    </TouchableOpacity>
  </View>
  )
}

function Macciatto({navigation}) {
  return(
  <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
    <Image style={{width:400, height:400}}
      source = {require('./assets/Macciatto1.png')}/>
    <View style = {{marginTop:50}}/>
    <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 이해했어요! </Text>
    <View style = {{marginTop:10}}/>
    <TouchableOpacity onPress = {function() {navigation.navigate('Make_Macciatto')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
    </TouchableOpacity>
  </View>
  )
}

function Americano({navigation}) {
  return(
  <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
    <Image style={{width:400, height:400}}
      source = {require('./assets/Americano1.png')}/>
    <View style = {{marginTop:50}}/>
    <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 이해했어요! </Text>
    <View style = {{marginTop:10}}/>
    <TouchableOpacity onPress = {function() {navigation.navigate('Make_Americano')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
    </TouchableOpacity>
  </View>
  )
}

function Mocha({navigation}) {
  return(
  <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
    <Image style={{width:400, height:400}}
      source = {require('./assets/Mocha1.png')}/>
    <View style = {{marginTop:50}}/>
    <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 이해했어요! </Text>
    <View style = {{marginTop:10}}/>
    <TouchableOpacity onPress = {function() {navigation.navigate('Make_Mocha')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
    </TouchableOpacity>
  </View>
  )
}

function Latte({navigation}) {
  return(
  <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
    <Image style={{width:400, height:400}}
      source = {require('./assets/Latte1.png')}/>
    <View style = {{marginTop:50}}/>
    <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 이해했어요! </Text>
    <View style = {{marginTop:10}}/>
    <TouchableOpacity onPress = {function() {navigation.navigate('Make_Latte')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
    </TouchableOpacity>
  </View>
  )
}

function Apocatto({navigation}) {
  return(
  <View style={{paddingTop:100, flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
    <Image style={{width:400, height:400}}
      source = {require('./assets/Apocatto1.png')}/>
    <View style = {{marginTop:50}}/>
    <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 이해했어요! </Text>
    <View style = {{marginTop:10}}/>
    <TouchableOpacity onPress = {function() {navigation.navigate('Make_Apocatto')}}>
    <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
    </TouchableOpacity>
  </View>
  )
}


function Menu({navigation}) {
  return (
    <View style = {{flex:1}}>
      <ImageBackground style={{height:'100%', width:'100%'}}
        resizeMode="stretch" source={require('./assets/menu.png')}>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p1_st} onTouchStart = {function() {navigation.navigate('Espresso')}}/>  
          <View style={p1_st} onTouchStart = {function() {navigation.navigate('Macciatto')}}/>
        </View>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p1_st} onTouchStart = {function() {navigation.navigate('Americano')}}/>  
          <View style={p1_st} onTouchStart = {function() {navigation.navigate('Mocha')}}/>
        </View>
        <View style = {{flex:1, flexDirection:'row'}}>
          <View style={p1_st} onTouchStart = {function() {navigation.navigate('Latte')}}/>
          <View style={p1_st} onTouchStart = {function() {navigation.navigate('Apocatto')}}/> 
        </View>
        </ImageBackground>
    </View>
  );
}

function HomeScreen({navigation}) {

  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:'rgb(255,255,245)'}}>
      <Text style = {{marginTop:50, fontSize:40, fontWeight:"bold", color:'rgb(160,138,131)' }}> Coffee Recipe </Text>
      <Image style={{width:400, height:400}}
        source = {require('./assets/bear.png')}/>
      <View style = {{marginTop:50}}/>
      <Text style = {{fontSize:20, fontWeight: "bold", color: 'rgb(160,138,131)'}}> 커피를 만들러 가볼까요? </Text>
      <View style = {{marginTop:10}}/>
      <TouchableOpacity onPress = {function() {navigation.navigate('Menu')}}>
      <Text style = {{fontSize:15, fontWeight: "bold", padding:10, backgroundColor:'rgb(255,243,253)', borderWidth:2, borderColor:'rgb(160,138,131)', borderRadius: 5, color:'rgb(160,138,131)'}}> Click </Text> 
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Espresso" component={Espresso} />
        <Stack.Screen name="Macciatto" component={Macciatto} />
        <Stack.Screen name="Americano" component={Americano} />
        <Stack.Screen name="Mocha" component={Mocha} />
        <Stack.Screen name="Latte" component={Latte} />
        <Stack.Screen name="Apocatto" component={Apocatto} />
        <Stack.Screen name="Make_Espresso" component={Make_Espresso} />
        <Stack.Screen name="Make_Macciatto" component={Make_Macciatto} />
        <Stack.Screen name="Make_Americano" component={Make_Americano} />
        <Stack.Screen name="Make_Mocha" component={Make_Mocha} />
        <Stack.Screen name="Make_Latte" component={Make_Latte} />
        <Stack.Screen name="Make_Apocatto" component={Make_Apocatto} />
        <Stack.Screen name="End_Espresso" component={End_Espresso} />
        <Stack.Screen name="End_Macciatto" component={End_Macciatto} />
        <Stack.Screen name="End_Americano" component={End_Americano} />
        <Stack.Screen name="End_Mocha" component={End_Mocha} />
        <Stack.Screen name="End_Latte" component={End_Latte} />
        <Stack.Screen name="End_Apocatto" component={End_Apocatto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}