$(function(){

    getData();

   //定义数据获取函数

   function getData(){

         

          //使用ajax

          $.ajax({

                 url:"1.json",

                 dataType:"json",

                 success:function(data){

                        //遍历获取到的数据，动态创建表格每一行数据

                        $.each(data,function(index,ele){

                               var $item = createRow(index,ele);

                               var $data_item = $(".content_table tbody");

                               $data_item.append($item);

//这两行代码是实现表格奇偶行显示不同颜色的，一定要放在这个位置，因为数据没添加一行，就要执行一次该代码，若放在开头或结尾，由于js加载顺序问题，使这两行代码在表格加载前或加载后在执行，就起不到改变奇偶行显示不同颜色的作用                

$(".content_table tbody tr:even").css("background-color","aliceblue");

$(".content_table tbody tr:odd").css("background-color","blanchedalmond");

                        });

                        console.log(data);

                 },

                 error:function(e){

                        console.log(e);

                 }

          });

         

   }            

   //定义动态创建数据行的方法

   function createRow(index,ele){

   var $items = $(

                               "<tr>" +

                                      "<td>"+ele.pno+"</td>" +

                                      "<td>"+ele.pname+"</td>" +

                                      "<td>"+ele.price+"</td>" +

                                      "<td>"+ele.number+"</td>" +

                                      "<td>"+ele.adress+"</td>" +

                                      "<td>"+ele.company+"</td>" +

                               "</tr>"

                        );                  

          return $items;

   }

});

 