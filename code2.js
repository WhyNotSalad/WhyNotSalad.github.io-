gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1= [];
gdjs.New_32sceneCode.GDShopKeepersDialougeObjects2= [];
gdjs.New_32sceneCode.GDCoinsTextObjects1= [];
gdjs.New_32sceneCode.GDCoinsTextObjects2= [];
gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1= [];
gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects2= [];
gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1= [];
gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects2= [];
gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1= [];
gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects2= [];
gdjs.New_32sceneCode.GDExitShopButtonObjects1= [];
gdjs.New_32sceneCode.GDExitShopButtonObjects2= [];
gdjs.New_32sceneCode.GDbackgroundObjects1= [];
gdjs.New_32sceneCode.GDbackgroundObjects2= [];
gdjs.New_32sceneCode.GDplayerObjects1= [];
gdjs.New_32sceneCode.GDplayerObjects2= [];
gdjs.New_32sceneCode.GDexitObjects1= [];
gdjs.New_32sceneCode.GDexitObjects2= [];
gdjs.New_32sceneCode.GDshopKeeperObjects1= [];
gdjs.New_32sceneCode.GDshopKeeperObjects2= [];
gdjs.New_32sceneCode.GDStatsTextObjects1= [];
gdjs.New_32sceneCode.GDStatsTextObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseQuiverUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseQuiverUpgrade": gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseHealthUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseHealthUpgrade": gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDExitShopButtonObjects1Objects = Hashtable.newFrom({"ExitShopButton": gdjs.New_32sceneCode.GDExitShopButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDExitShopButtonObjects1Objects = Hashtable.newFrom({"ExitShopButton": gdjs.New_32sceneCode.GDExitShopButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseBowUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseBowUpgrade": gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseBowUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseBowUpgrade": gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseHealthUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseHealthUpgrade": gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseQuiverUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseQuiverUpgrade": gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseBowUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseBowUpgrade": gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseHealthUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseHealthUpgrade": gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseQuiverUpgradeObjects1Objects = Hashtable.newFrom({"PurchaseQuiverUpgrade": gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.New_32sceneCode.GDexitObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDExitShopButtonObjects1Objects = Hashtable.newFrom({"ExitShopButton": gdjs.New_32sceneCode.GDExitShopButtonObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PurchaseBowUpgrade"), gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurchaseHealthUpgrade"), gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurchaseQuiverUpgrade"), gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopKeepersDialouge"), gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1[i].setString("Welcome to my shop, what upgrades would you like to purchase?");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1[i].setAnimationName("none");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1[i].setAnimationName("none");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1[i].setAnimationName("none");
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].addForce(100, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getX() >= 660 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("idle");
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseQuiverUpgrade"), gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseQuiverUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1[i].setAnimationName("yellow");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseHealthUpgrade"), gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseHealthUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1[i].setAnimationName("yellow");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitShopButton"), gdjs.New_32sceneCode.GDExitShopButtonObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDExitShopButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) < 1;
}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopKeepersDialouge"), gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopKeeper"), gdjs.New_32sceneCode.GDshopKeeperObjects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].addPolarForce(180, 100, 1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1[i].setString("Thank you! Come again!");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDshopKeeperObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshopKeeperObjects1[i].setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitShopButton"), gdjs.New_32sceneCode.GDExitShopButtonObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDExitShopButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopKeepersDialouge"), gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopKeeper"), gdjs.New_32sceneCode.GDshopKeeperObjects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].addPolarForce(180, 200, 1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1[i].setString("Only a quick visit? Well please come again!");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDshopKeeperObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshopKeeperObjects1[i].setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseBowUpgrade"), gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseBowUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(20);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1[i].setAnimationName("yellow");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseBowUpgrade"), gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseBowUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1[i].isCurrentAnimationName("yellow")) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1[k] = gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1[i].setAnimationName("white");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseHealthUpgrade"), gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseHealthUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1[i].isCurrentAnimationName("yellow")) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1[k] = gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1[i].setAnimationName("white");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseQuiverUpgrade"), gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseQuiverUpgradeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1[i].isCurrentAnimationName("yellow")) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1[k] = gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1[i].setAnimationName("white");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseBowUpgrade"), gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseBowUpgradeObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopKeepersDialouge"), gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1[i].setString("The bow upgrade costs " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + " gold. It increases the power of your shots!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseHealthUpgrade"), gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseHealthUpgradeObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopKeepersDialouge"), gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1[i].setString("The health upgrade costs " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) + " gold. It increases your maximum health by 1!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurchaseQuiverUpgrade"), gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPurchaseQuiverUpgradeObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopKeepersDialouge"), gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1[i].setString("The quiver upgrade costs " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + " gold. It increases the amount of arrows you can carry by 1!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.New_32sceneCode.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDexitObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, false, runtimeScene, true);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > 0;
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CoinsText"), gdjs.New_32sceneCode.GDCoinsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitShopButton"), gdjs.New_32sceneCode.GDExitShopButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StatsText"), gdjs.New_32sceneCode.GDStatsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopKeeper"), gdjs.New_32sceneCode.GDshopKeeperObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDshopKeeperObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshopKeeperObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDStatsTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDStatsTextObjects1[i].setString("Scene name: " + gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + gdjs.evtTools.string.newLine() + "Scene Duration: " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "time")) + gdjs.evtTools.string.newLine());
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDExitShopButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDExitShopButtonObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinsTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinsTextObjects1[i].setString("Coins Collected: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitShopButton"), gdjs.New_32sceneCode.GDExitShopButtonObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDExitShopButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDExitShopButtonObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDExitShopButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDExitShopButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shopKeeper"), gdjs.New_32sceneCode.GDshopKeeperObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDshopKeeperObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDshopKeeperObjects1[i].isCurrentAnimationName("jump") ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDshopKeeperObjects1[k] = gdjs.New_32sceneCode.GDshopKeeperObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDshopKeeperObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDshopKeeperObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDshopKeeperObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDshopKeeperObjects1[k] = gdjs.New_32sceneCode.GDshopKeeperObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDshopKeeperObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDshopKeeperObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDshopKeeperObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshopKeeperObjects1[i].setAnimationName("meditate");
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "audioChanged");
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "audioChanged");
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "audioChanged");
}}

}


{


{
}

}


{


{
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("StatsText"), gdjs.New_32sceneCode.GDStatsTextObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDStatsTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDStatsTextObjects1[i].hide(false);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("StatsText"), gdjs.New_32sceneCode.GDStatsTextObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDStatsTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDStatsTextObjects1[i].hide();
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDShopKeepersDialougeObjects1.length = 0;
gdjs.New_32sceneCode.GDShopKeepersDialougeObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinsTextObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinsTextObjects2.length = 0;
gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects1.length = 0;
gdjs.New_32sceneCode.GDPurchaseQuiverUpgradeObjects2.length = 0;
gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects1.length = 0;
gdjs.New_32sceneCode.GDPurchaseBowUpgradeObjects2.length = 0;
gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects1.length = 0;
gdjs.New_32sceneCode.GDPurchaseHealthUpgradeObjects2.length = 0;
gdjs.New_32sceneCode.GDExitShopButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDExitShopButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDplayerObjects1.length = 0;
gdjs.New_32sceneCode.GDplayerObjects2.length = 0;
gdjs.New_32sceneCode.GDexitObjects1.length = 0;
gdjs.New_32sceneCode.GDexitObjects2.length = 0;
gdjs.New_32sceneCode.GDshopKeeperObjects1.length = 0;
gdjs.New_32sceneCode.GDshopKeeperObjects2.length = 0;
gdjs.New_32sceneCode.GDStatsTextObjects1.length = 0;
gdjs.New_32sceneCode.GDStatsTextObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
