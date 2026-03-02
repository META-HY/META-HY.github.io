---
title: UE4智慧城市可视化学习笔记1-模型及贴图处理
date: 2023-01-01 08:00:00
cover: https://img2.baidu.com/it/u=1296948753,1240784421&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281
feature: true
password: 
toc: ture
mathjax: 
summary: 
categories: 学习笔记
tags:
  - 学习笔记
  - UE4虚幻引擎

author:
  name: HuaYang
  avatar: https://s3.bmp.ovh/imgs/2022/07/05/f30c5a60868494ae.png
  link: https://github.com/metahmi
  description: 'LIFE AND DREAM'
  socials: 
    github: https://github.com/metahmi
---

### 1.使用QGIS获取地图数据数据
QGIS获取网址为https://github.com/qgis/QGIS
##### 1.1 处理建筑数据
QGIS默认状态下为英文，可以参照下图改为中文，确定后重新打开QGIS Desktop就是中文模式。

![QGIS改中文](https://s3.bmp.ovh/imgs/2022/09/03/5fff0599a53f67a1.png)

如果有本地的.shp数据则打开QGIS Desktop 导入本地的.shp数据（直接将文件拖进QGIS），这里以` 南京.SHP `为例；如果没有则按照下文`获取道路数据`的方式进行建筑数据的获取（关键词building，`画布范围`改为` 位于 `并输入自己需要的省份或市名称拼音）。缩放到需要的位置，左下角图层位置在南京图层上右击，选择` 导出-要素另存为 `；文件名设置为Nanjing（任意名即可）；格式选择` ESRI Shapefile `，CRS选择` EPSG:3857 `（找不到的话点击右侧图标搜索3857），点击OK等待导出。导出成功后左下角会多一个` Nanjing `图层，此时可以移除` 南京 `图层。

![地图格式选择](https://s3.bmp.ovh/imgs/2022/09/03/1ebece8c45961eff.png)
![导出后](https://s3.bmp.ovh/imgs/2022/09/03/a59a0e99dbfb9b56.png)

##### 1.2 安装quickOSM获取道路数据
获取道路数据需要安装插件：在上方` 工具栏-插件-管理并安装插件 `，搜索` quickOSM `，选中之后点击安装插件。
##### 1.3 使用QuickOSM获取道路数据
点击左上角QuickOSM插件（图标为绿色背景的放大镜），具体设置参照图片。

![QuickOSM图标](https://s3.bmp.ovh/imgs/2022/08/02/5593cdf391bb973f.png)

##### 1.4 导出道路数据
具体的方法与上文` 处理建筑数据 `一致。
##### 1.5 获取当前区域范围
点击左上角图标新建` 临时图层 `，具体参数见图。然后点击` 编辑-添加矩形-由范围添加矩形 `，然后选取整个地图窗口。导出矩形范围（具体的方法与上文` 处理建筑数据 `一致）。

![临时图层位置](https://s3.bmp.ovh/imgs/2022/08/02/ba1d6e9e35704add.png)
![临时图层参数设置](https://s3.bmp.ovh/imgs/2022/08/02/735c28e88c13d2ed.png)

### 2.Bigmap获取矩形范围卫星地图
bigmap获取网址为http://download.bigemap.com/bmsetup.rar（可以联系bigmap官方客服获取免费试用版本）
在bigmap中点击` 导入边界 `，选择上一步中导出的` fanwei.shp `，选择合适的层级（一般13-16级之间，试用用户最高可选14级），点击确定即可下载。默认会下载.tif格式图片。

![导入fanwei.shp](https://s3.bmp.ovh/imgs/2022/09/03/b7a18896e0894514.png)

### 3.Blender处理SHP数据
##### 3.1 安装相应软件及插件
首先需要安装blender、GIS插件和Datasmith插件
blender获取网址为https://www.blender.org/download/ 
GIS插件获取网址为https://github.com/domlysz/BlenderGIS
Datasmith插件获取网址为https://github.com/0xafbf/blender-datasmith-export

在blender中点击菜单栏` 编辑-偏好设置-插件-安装 `，在弹出的窗口中选择` blenderGIS.zip `和` blender-datasmith-export `文件后点击安装插件，安装后记得在插件前打勾激活。

![安装插件](https://s3.bmp.ovh/imgs/2022/09/03/4f7785fe04524305.png)
![安装插件](https://s3.bmp.ovh/imgs/2022/09/03/c7091d64d3406931.png)

（在安装blender-datasmith-export时blender会报错Traceback(most recent call last)，这是因为压缩包文件名为`  blender-datasmith-export-1.0.1.zip`,此时需要删除压缩文件中的` -1.0.1 `后在进行安装即可解决报错问题。）

![报错名称](https://s3.bmp.ovh/imgs/2022/09/03/832a3fd1b51b3700.png)
![解决报错](https://s3.bmp.ovh/imgs/2022/09/03/948e5c4b0b9dc47e.png)

##### 3.2 导入建筑数据
点击GIS插件导入shp数据，导入时的具体参数见图，导入时间会因模型数据的大小而有所区别，等待即可。以相同方法导入` ways.shp `和` fanwei.shp `（导入参数默认即可）。

![blender导入shps数据时使用的参数](https://s3.bmp.ovh/imgs/2022/08/02/b55c38a49d42660c.png)

##### 3.3 道路数据处理
点击GIS插件导入shp数据，导入成功后需要对道路进行处理，shp数据的道路只是线条，需要在blender中转换为曲面。
####### 3.3.1 创建道路宽度
具体操作方法为：1.选择道路层级；2.点击左上角` 物体-转换到-曲线 `；3.点击右下角` 物件属性 `；4.点击左上角` 添加-曲线-路径曲线 `；5.点击道路层级，点击点击右下角` 物件属性 `，找到` 几何数据-倒角-物体 `，选择我们刚才新建的` NURBS路径 `。完成后道路就有了宽度。
####### 3.3.2 调整道路宽度
点击新建的NURBS路径-条目(N)-变换-缩放x轴，数值不宜过大，2或3即可。

##### 3.4 地面贴图处理
在blender中新建平面，大小位置与导入的` fanwei.shp `一致，新建材质，将贴图设置为从bigmap中下载的.tif图片，把材质赋给新建平面。

##### 3.5 导出datasmith文件
在blender中选择` 文件-导出-datasmith `。导出时间会因模型数据的大小而有所区别，等待即可。

至此模型的处理已经完成。

![最终模型](https://s3.bmp.ovh/imgs/2022/08/02/e1f1c325ad999ac2.png)
