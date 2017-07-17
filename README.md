##ALiberHP

The Official Homepage of ALiber

#### Easy Run Instructions:

####- macOS: 
1.  Put the ALiberHP folder under： /Library/WebServer/Documents/

2.  Enable PHP for Apache

      Edit the Apache configuration: 
      	/etc/apache2/httpd.conf
      	
      Uncomment the following line (remove #):
      	LoadModule php7_module libexec/apache2/libphp7.so

3.  Run command：```sudo apachectl start```

4.  Browse to [http://localhost/ALiberHP](http://localhost/ALiberHP)

