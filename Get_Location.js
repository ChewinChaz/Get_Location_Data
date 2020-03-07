<aura:component implements="lightning:availableForFlowScreens" access="global" >
    <lightning:button label="GPS Snapshot" aura:id="btnGPS" 
                      variant="brand" onclick="{!c.getGPS}"/>
    <aura:attribute name="userLatitude" type="Double"/>
    <aura:attribute name="userLongitude" type="Double"/>
    <lightning:inputLocation label="Coordinates" name="Coordinates" aura:id="Coordinates" />
</aura:component>
