gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDThankYouTextObjects1= [];
gdjs.New_32sceneCode.GDThankYouTextObjects2= [];
gdjs.New_32sceneCode.GDCoinsTextObjects1= [];
gdjs.New_32sceneCode.GDCoinsTextObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinsText"), gdjs.New_32sceneCode.GDCoinsTextObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinsTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinsTextObjects1[i].setString("Coins Collected: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDThankYouTextObjects1.length = 0;
gdjs.New_32sceneCode.GDThankYouTextObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinsTextObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinsTextObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
