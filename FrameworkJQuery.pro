# Add more folders to ship with the application, here
folder_01.source = html
folder_01.target = .
DEPLOYMENTFOLDERS = folder_01

# Define TOUCH_OPTIMIZED_NAVIGATION for touch optimization and flicking
#DEFINES += TOUCH_OPTIMIZED_NAVIGATION

symbian:TARGET.UID3 = 0xE259FF1E

# Allow network access on Symbian
symbian:TARGET.CAPABILITY += NetworkServices

# Smart Installer package's UID
# This UID is from the protected range and therefore the package will
# fail to install if self-signed. By default qmake uses the unprotected
# range value if unprotected UID is defined for the application and
# 0x2002CCCF value if protected UID is given to the application
#symbian:DEPLOYMENT.installer_header = 0x2002CCCF

# If your application uses the Qt Mobility libraries, uncomment the following
# lines and add the respective components to the MOBILITY variable.
# CONFIG += mobility
# MOBILITY +=

# The .cpp file which was generated for your project. Feel free to hack it.
SOURCES += main.cpp

# Please do not modify the following two lines. Required for deployment.
include(html5applicationviewer/html5applicationviewer.pri)
qtcAddDeployment()

OTHER_FILES += \
    FW_Formation/test.html \
    FW_Formation/css/formation.css \
    FW_Formation/JS/FW_Formation.js \
    FW_Formation/JS/interface.js \
    FW_Grid/test.html \
    FW_Grid/JS/Grid.js \
    FW_Grid/JS/interface.js \
    FW_Grid/css/site.css \
    src/FW_Grid/test.html \
    src/FW_Grid/JS/Grid.js \
    src/FW_Grid/JS/interface.js \
    src/FW_Formation/test.html \
    src/FW_Formation/JS/interface.js \
    src/FW_TreeView/test.html \
    src/FW_TreeView/JS/TreeView.js \
    src/FW_TreeView/JS/interface.js \
    src/FW_TreeView/css/jquery.treeview.css \
    src/FW_Tabs/test.html \
    src/FW_Tabs/JS/interface.js \
    src/FW_Tabs/JS/Tabs.js \
    src/FW_Formation/JS/Formation.js















