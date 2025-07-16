---
layout: doc
outline: deep
title: "PHP on CentOS 7"
description: "Upgrade PHP 5.4 to PHP 7.2 on CentOS 7"
date: 2024-01-23
editLink: true
head:
  - - meta
    - name: keywords
      content: CentOS, PHP
---

# PHP on CentOS 7

Upgrade PHP 5.4 to PHP 7.2 on CentOS 7'

**Reason:**

The default PHP version installed by yum on CentOS 7 is 5.4, but the new framework requires PHP version 7 or above, so we need to upgrade PHP.

**Check the list of PHP versions available for installation via yum:**

```reg
yum provides php
```

**Start upgrading the PHP repository:**

```reg
rpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm 
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum remove php-common -y  
yum install -y php72w php72w-opcache php72w-xml php72w-mcrypt php72w-gd php72w-devel php72w-mysql php72w-intl php72w-mbstring
```

**Check the version:**

```reg
php -v
PHP 7.2.14 (cli) (built: Jan 12 2019 12:47:33) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.2.14, Copyright (c) 1999-2018, by Zend Technologies
```

**Install PHP-FPM:**

```reg
yum install php72w-fpm
# Start php-fpm
systemctl start php-fpm.service
# Enable php-fpm to start on boot
system toctl enable php-fpm.service
```