---
title: 使用cloudflare DDNS远程访问飞牛NAS并设置https访问
date: 2025-04-11 08:00:00
cover: https://images.pexels.com/photos/20721/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800
feature: true
password: 
toc: ture
mathjax: 
summary: 
categories: 教程
tags:
  - 飞牛私有云
  - cloudflare
  - https访问

author:
  name: HuaYang
  avatar: https://s3.bmp.ovh/imgs/2022/07/05/f30c5a60868494ae.png
  link: https://github.com/metahmi
  description: 'LIFE AND DREAM'
  socials: 
    github: https://github.com/metahmi
---

### 前期准备
##### Clouflare账户
如果没有cloudflare账户，请先前往https://dash.cloudflare.com进行注册。
##### 拥有自己的域名
设置前需要有自己的域名，如果没有可以前往腾讯云、阿里云、godaddy等网站进行购买，购买教程请自行搜索教程。本文使用simpleddnsname.com示例。
##### 域名使用cloudflare进行解析
域名注册成功后，需将域名解析至cloudflare域，具体教程自行搜索。

### cloudflare设置
##### 获取域名账户ID
账户ID需要进入到想想要远程访问飞牛nas的域名设置内，具体操作`账户主页-域-simpleddnsname.com`，在概述页面的右下方可看到账户ID,账户ID是一串数字和字母组成的字符串，这串字符飞牛中需要用到。
##### 设置DNS解析
在DNS中新建一个类型A解析，名称填想要远程访问飞牛nas的域名的二级域名，如fnnas，内容可以随便填一个IP地址，这个地址后面会自动更新。代理可以关掉。
##### 获取Clouflare用户API令牌
cloudflare登录成功后，点击左上角` 个人账户（人像图标）-配置文件 `，在我的个人资料下找到` API令牌 `,然后点击创建令牌，选择` 编辑区域 DNS `并使用模板创建。
权限选择` 区域-DNS-编辑 `
区域资源选择`包括-特定区域-simpleddnsname.com`
然后点击下方的`继续以显示摘要-创建令牌`
至此用户API令牌即创建成功，这个API令牌一会飞牛中需要用到，可以先copy出来。API令牌只会显示一次，创建成功后不要关闭网页。
![配置文件](https://s3.bmp.ovh/imgs/2025/04/11/c58da0145f7b5f44.png)
![创建API](https://s3.bmp.ovh/imgs/2025/04/11/f43cd697e785a9b6.png)
![创建API](https://s3.bmp.ovh/imgs/2025/04/11/1a7eaec1fd754c71.png)
![API内容](https://s3.bmp.ovh/imgs/2025/04/11/70e99f2181176fb0.png)

### 飞牛DDNS设置
在飞牛`系统设置-远程访问-DDNS`中新增DDNS.
DDNS服务商选择`cloudflare`
DDNS域名输入`fnnas.simpleddnsname.com`这个域名以后可以直接远程访问飞牛。
用户名/ID输入获取到的`账户ID`
密钥/密码输入创建的`API令牌`
外部IPv4地址选择`内网IP`如192.168.1.123。
外部IPv6地址选择`外网IP`这里要选择非内网地址，方便外网IPv6访问。
点击`保存`DDNS即创建成功,成功后可尝试`立即更新`，如果状态显示成功，即可使用http://fnnas.simpleddnsname.com:5666 远程访问飞牛NAS。
![DDNS设置](https://s3.bmp.ovh/imgs/2025/04/11/22d32c8e75a3a053.png)

### 开启https访问飞牛nas
##### 获取SSL证书
开启https需要使用证书，本文使用腾讯云申请的免费证书示例。
在`全部云产品-SSL证书`中申请免费证书。
证书绑定域名输入`fnnas.simpleddnsname.com`
验证方式选择`手动DNS验证`
提交申请后需要在cloudflare的DNS中手动填写一条解析记录，复制腾讯云提供的记录填入即可。保存后返回腾讯云`验证域名`，验证可能需要等待几分钟。
验证成功后`返回列表`，找到申请的证书信息，点击`下载`，选择Nginx服务器类型下载。下载的是一个`*_nginx..zip`的压缩包，解压后找到`*.key`和`*.pem`文件,飞牛中需要用到。
![下载证书](https://s3.bmp.ovh/imgs/2025/04/11/407d9ceeec268b18.png)
![证书类型](https://s3.bmp.ovh/imgs/2025/04/11/3c926cd507e74a64.png)
##### 在飞牛中添加证书
登陆飞牛后找到`系统设置-安全性-证书`，点击`新增证书`。
描述可以任意填写，
证书选择之前下载的`*.pem`文件，
私钥选择之前下载的`*.key`文件，
中间证书可以不选择，
点击`确认`即添加成功。
添加成功后需要在`服务配置-远程访问备用`中选择上传的域名SSL证书，`确认`后即可使用https远程访问飞牛NAS.

### 附言
在腾讯云申请的免费SSL证书默认只有90天有效期，到期后会自动失效，所以可以在腾讯云中打开证书的自动续费，以免证书过期。
