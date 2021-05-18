gdjs.final_32ScreenCode = {};
gdjs.final_32ScreenCode.GDcongratsTextObjects1= [];
gdjs.final_32ScreenCode.GDcongratsTextObjects2= [];
gdjs.final_32ScreenCode.GDrestartButtonObjects1= [];
gdjs.final_32ScreenCode.GDrestartButtonObjects2= [];
gdjs.final_32ScreenCode.GDreturnButtonObjects1= [];
gdjs.final_32ScreenCode.GDreturnButtonObjects2= [];
gdjs.final_32ScreenCode.GDbracketObjects1= [];
gdjs.final_32ScreenCode.GDbracketObjects2= [];
gdjs.final_32ScreenCode.GDplayerObjects1= [];
gdjs.final_32ScreenCode.GDplayerObjects2= [];
gdjs.final_32ScreenCode.GDExitButtonObjects1= [];
gdjs.final_32ScreenCode.GDExitButtonObjects2= [];

gdjs.final_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.final_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.final_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.final_32ScreenCode.condition2IsTrue_0 = {val:false};


gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDrestartButtonObjects1Objects = Hashtable.newFrom({"restartButton": gdjs.final_32ScreenCode.GDrestartButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDrestartButtonObjects1Objects = Hashtable.newFrom({"restartButton": gdjs.final_32ScreenCode.GDrestartButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDreturnButtonObjects1Objects = Hashtable.newFrom({"returnButton": gdjs.final_32ScreenCode.GDreturnButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDreturnButtonObjects1Objects = Hashtable.newFrom({"returnButton": gdjs.final_32ScreenCode.GDreturnButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDrestartButtonObjects1Objects = Hashtable.newFrom({"restartButton": gdjs.final_32ScreenCode.GDrestartButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDreturnButtonObjects1Objects = Hashtable.newFrom({"returnButton": gdjs.final_32ScreenCode.GDreturnButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.final_32ScreenCode.GDExitButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.final_32ScreenCode.GDExitButtonObjects1});gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.final_32ScreenCode.GDExitButtonObjects1});gdjs.final_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("congratsText"), gdjs.final_32ScreenCode.GDcongratsTextObjects1);
{for(var i = 0, len = gdjs.final_32ScreenCode.GDcongratsTextObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDcongratsTextObjects1[i].setString("Congratulations on making it home!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Final stats:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Deaths: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Health: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Quiver Size: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Bow Strength: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restartButton"), gdjs.final_32ScreenCode.GDrestartButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDrestartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.final_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.final_32ScreenCode.GDrestartButtonObjects1 */
{for(var i = 0, len = gdjs.final_32ScreenCode.GDrestartButtonObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDrestartButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restartButton"), gdjs.final_32ScreenCode.GDrestartButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDrestartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.final_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.final_32ScreenCode.GDrestartButtonObjects1 */
{for(var i = 0, len = gdjs.final_32ScreenCode.GDrestartButtonObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDrestartButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("returnButton"), gdjs.final_32ScreenCode.GDreturnButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDreturnButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.final_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.final_32ScreenCode.GDreturnButtonObjects1 */
{for(var i = 0, len = gdjs.final_32ScreenCode.GDreturnButtonObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDreturnButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("returnButton"), gdjs.final_32ScreenCode.GDreturnButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDreturnButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.final_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.final_32ScreenCode.GDreturnButtonObjects1 */
{for(var i = 0, len = gdjs.final_32ScreenCode.GDreturnButtonObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDreturnButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restartButton"), gdjs.final_32ScreenCode.GDrestartButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.final_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDrestartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.final_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.final_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.final_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(-(279));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(459);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("returnButton"), gdjs.final_32ScreenCode.GDreturnButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.final_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDreturnButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.final_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.final_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.final_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(-(279));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(459);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.final_32ScreenCode.GDExitButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.final_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.final_32ScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.final_32ScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDExitButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.final_32ScreenCode.GDExitButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.final_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.final_32ScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.final_32ScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.final_32ScreenCode.GDExitButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.final_32ScreenCode.GDExitButtonObjects1);

gdjs.final_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.final_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.final_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.final_32ScreenCode.mapOfGDgdjs_46final_9532ScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.final_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.final_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.final_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title screen", true);
}}

}


};

gdjs.final_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.final_32ScreenCode.GDcongratsTextObjects1.length = 0;
gdjs.final_32ScreenCode.GDcongratsTextObjects2.length = 0;
gdjs.final_32ScreenCode.GDrestartButtonObjects1.length = 0;
gdjs.final_32ScreenCode.GDrestartButtonObjects2.length = 0;
gdjs.final_32ScreenCode.GDreturnButtonObjects1.length = 0;
gdjs.final_32ScreenCode.GDreturnButtonObjects2.length = 0;
gdjs.final_32ScreenCode.GDbracketObjects1.length = 0;
gdjs.final_32ScreenCode.GDbracketObjects2.length = 0;
gdjs.final_32ScreenCode.GDplayerObjects1.length = 0;
gdjs.final_32ScreenCode.GDplayerObjects2.length = 0;
gdjs.final_32ScreenCode.GDExitButtonObjects1.length = 0;
gdjs.final_32ScreenCode.GDExitButtonObjects2.length = 0;

gdjs.final_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['final_32ScreenCode'] = gdjs.final_32ScreenCode;
