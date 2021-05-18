gdjs.title_32screenCode = {};
gdjs.title_32screenCode.GDPlayTextObjects1= [];
gdjs.title_32screenCode.GDPlayTextObjects2= [];
gdjs.title_32screenCode.GDSoundTextObjects1= [];
gdjs.title_32screenCode.GDSoundTextObjects2= [];
gdjs.title_32screenCode.GDShowCheatsTextObjects1= [];
gdjs.title_32screenCode.GDShowCheatsTextObjects2= [];
gdjs.title_32screenCode.GDCheatTextObjects1= [];
gdjs.title_32screenCode.GDCheatTextObjects2= [];
gdjs.title_32screenCode.GDstatsTextObjects1= [];
gdjs.title_32screenCode.GDstatsTextObjects2= [];
gdjs.title_32screenCode.GDNewObjectObjects1= [];
gdjs.title_32screenCode.GDNewObjectObjects2= [];
gdjs.title_32screenCode.GDplayerObjects1= [];
gdjs.title_32screenCode.GDplayerObjects2= [];

gdjs.title_32screenCode.conditionTrue_0 = {val:false};
gdjs.title_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.title_32screenCode.condition1IsTrue_0 = {val:false};
gdjs.title_32screenCode.condition2IsTrue_0 = {val:false};
gdjs.title_32screenCode.condition3IsTrue_0 = {val:false};
gdjs.title_32screenCode.condition4IsTrue_0 = {val:false};


gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects = Hashtable.newFrom({"SoundText": gdjs.title_32screenCode.GDSoundTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects = Hashtable.newFrom({"SoundText": gdjs.title_32screenCode.GDSoundTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects = Hashtable.newFrom({"SoundText": gdjs.title_32screenCode.GDSoundTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects = Hashtable.newFrom({"SoundText": gdjs.title_32screenCode.GDSoundTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDPlayTextObjects1Objects = Hashtable.newFrom({"PlayText": gdjs.title_32screenCode.GDPlayTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDShowCheatsTextObjects1Objects = Hashtable.newFrom({"ShowCheatsText": gdjs.title_32screenCode.GDShowCheatsTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDShowCheatsTextObjects1Objects = Hashtable.newFrom({"ShowCheatsText": gdjs.title_32screenCode.GDShowCheatsTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDPlayTextObjects1Objects = Hashtable.newFrom({"PlayText": gdjs.title_32screenCode.GDPlayTextObjects1});gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDPlayTextObjects1Objects = Hashtable.newFrom({"PlayText": gdjs.title_32screenCode.GDPlayTextObjects1});gdjs.title_32screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CheatText"), gdjs.title_32screenCode.GDCheatTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDCheatTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDCheatTextObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.title_32screenCode.GDSoundTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDSoundTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDSoundTextObjects1[i].setAnimationName("on");
}
}}

}


{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.title_32screenCode.GDSoundTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDSoundTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDSoundTextObjects1[i].setAnimationName("off");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.title_32screenCode.GDSoundTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.title_32screenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.title_32screenCode.GDSoundTextObjects1 */
{for(var i = 0, len = gdjs.title_32screenCode.GDSoundTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDSoundTextObjects1[i].setAnimationName("on yellow");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.title_32screenCode.GDSoundTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.title_32screenCode.GDPlayTextObjects1);
/* Reuse gdjs.title_32screenCode.GDSoundTextObjects1 */
{for(var i = 0, len = gdjs.title_32screenCode.GDSoundTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDSoundTextObjects1[i].setAnimationName("off yellow");
}
}{for(var i = 0, len = gdjs.title_32screenCode.GDPlayTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDPlayTextObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.title_32screenCode.GDSoundTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
gdjs.title_32screenCode.condition2IsTrue_0.val = false;
gdjs.title_32screenCode.condition3IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "audioChanged");
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.title_32screenCode.condition1IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.title_32screenCode.condition2IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
if (gdjs.title_32screenCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundText"), gdjs.title_32screenCode.GDSoundTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
gdjs.title_32screenCode.condition2IsTrue_0.val = false;
gdjs.title_32screenCode.condition3IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "audioChanged");
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.title_32screenCode.condition1IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDSoundTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.title_32screenCode.condition2IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
if (gdjs.title_32screenCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.title_32screenCode.GDPlayTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDPlayTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.title_32screenCode.GDPlayTextObjects1 */
{for(var i = 0, len = gdjs.title_32screenCode.GDPlayTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDPlayTextObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ShowCheatsText"), gdjs.title_32screenCode.GDShowCheatsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("statsText"), gdjs.title_32screenCode.GDstatsTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDShowCheatsTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDShowCheatsTextObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.title_32screenCode.GDstatsTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDstatsTextObjects1[i].setString("Scene name: " + gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + gdjs.evtTools.string.newLine() + "Scene Duration: " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "time")) + gdjs.evtTools.string.newLine());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShowCheatsText"), gdjs.title_32screenCode.GDShowCheatsTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDShowCheatsTextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.title_32screenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CheatText"), gdjs.title_32screenCode.GDCheatTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDCheatTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDCheatTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShowCheatsText"), gdjs.title_32screenCode.GDShowCheatsTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDShowCheatsTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.title_32screenCode.GDShowCheatsTextObjects1 */
{for(var i = 0, len = gdjs.title_32screenCode.GDShowCheatsTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDShowCheatsTextObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.title_32screenCode.GDPlayTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDPlayTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.title_32screenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
gdjs.title_32screenCode.condition2IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "audioChanged");
}if ( gdjs.title_32screenCode.condition1IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
}
if (gdjs.title_32screenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}}

}


{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
gdjs.title_32screenCode.condition1IsTrue_0.val = false;
gdjs.title_32screenCode.condition2IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
}if ( gdjs.title_32screenCode.condition0IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "audioChanged");
}if ( gdjs.title_32screenCode.condition1IsTrue_0.val ) {
{
gdjs.title_32screenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
}
if (gdjs.title_32screenCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}}

}


{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("statsText"), gdjs.title_32screenCode.GDstatsTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDstatsTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDstatsTextObjects1[i].hide();
}
}}

}


{


gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("statsText"), gdjs.title_32screenCode.GDstatsTextObjects1);
{for(var i = 0, len = gdjs.title_32screenCode.GDstatsTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDstatsTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.title_32screenCode.GDPlayTextObjects1);

gdjs.title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.title_32screenCode.mapOfGDgdjs_46title_9532screenCode_46GDPlayTextObjects1Objects, runtimeScene, true, true);
}if (gdjs.title_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.title_32screenCode.GDPlayTextObjects1 */
{for(var i = 0, len = gdjs.title_32screenCode.GDPlayTextObjects1.length ;i < len;++i) {
    gdjs.title_32screenCode.GDPlayTextObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.title_32screenCode.GDPlayTextObjects1.length = 0;
gdjs.title_32screenCode.GDPlayTextObjects2.length = 0;
gdjs.title_32screenCode.GDSoundTextObjects1.length = 0;
gdjs.title_32screenCode.GDSoundTextObjects2.length = 0;
gdjs.title_32screenCode.GDShowCheatsTextObjects1.length = 0;
gdjs.title_32screenCode.GDShowCheatsTextObjects2.length = 0;
gdjs.title_32screenCode.GDCheatTextObjects1.length = 0;
gdjs.title_32screenCode.GDCheatTextObjects2.length = 0;
gdjs.title_32screenCode.GDstatsTextObjects1.length = 0;
gdjs.title_32screenCode.GDstatsTextObjects2.length = 0;
gdjs.title_32screenCode.GDNewObjectObjects1.length = 0;
gdjs.title_32screenCode.GDNewObjectObjects2.length = 0;
gdjs.title_32screenCode.GDplayerObjects1.length = 0;
gdjs.title_32screenCode.GDplayerObjects2.length = 0;

gdjs.title_32screenCode.eventsList0(runtimeScene);
return;

}

gdjs['title_32screenCode'] = gdjs.title_32screenCode;
