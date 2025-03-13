<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title> Forms </title>
        
    </head>
    <body style="font-style:normal; background-color:white;">
        <h2>Preview</h2>
        <p>
            <?php
                if(empty($_POST['name'])==false)
                {
                    echo $_POST['name'];
                }
                else 
                {
                    echo "Name: not provided.";
                }
            ?>
        </p>
        <p>
            <?php
                if(empty($_POST['uname'])==false)
                {
                    echo $_POST['uname'];
                }
                else 
                {
                    echo "Username: not provided.";
                }
            ?>
        </p>
        <p>
            <?php
                if(empty($_POST['pass'])==false)
                {
                    echo $_POST['pass'];
                }
                else 
                {
                    echo "Password: not provided.";
                }
            ?>
        </p>
        <p>
            <?php
                if(empty($_POST['address'])==false)
                {
                    echo $_POST['address'];
                }
                else 
                {
                    echo "Address: not provided.";
                }
            ?>
        </p>
        <p>
            <?php
               
                if(empty($_POST['country'])==false)
                {
                    $dashPosition = strpos($_POST['country'],"-")+1;
                    $countryName = substr($_POST['country'],$dashPosition);
                    echo "$countryName.";
  
                }
                else 
                {
                    echo "Country: Not provided.";
                }
            ?>
        </p>
        <p>
            <?php
                if(empty($_POST['zipcode'])==false)
                {
                    echo $_POST['zipcode'];
                }
                else 
                {
                    echo "ZIP Code: not provided.";
                }
            ?>
        </p>
        <p>
            <?php
                if(empty($_POST['email'])==false)
                {
                    if(is_bool($isThereA = strpos($_POST['email'],"@")))
                    {
                        echo "Your email must contain the '@' character";
                    }
                    else
                    {
                        $afterA = substr($_POST['email'],$isThereA);
                        $istThereDot = str_contains($afterA,".");
                        if($istThereDot)
                        {
                            echo $_POST['email'];
                        }
                        else
                        {
                            echo "Your email must contain . after the @ sign";
                        }
                    }
                    
                }
                else 
                {
                    echo "Email: not provided.";
                }
            ?>
        </p>
        <p>  
           <?php
               if(empty($_POST['sex'])==false)
               {
                     echo "Sex: ";
                   switch($_POST['sex'])
                   {
                        case "female":
                            echo "Female.";
                            break; 
                        case "male":
                            echo "Male.";
                            break; 
                        default:
                            echo "There must be an error";
                   }
               }
               else 
               {
                   echo "Sex: Not provided.";
               }
           ?>
       </p> 

       <p>  
           <?php
                echo "Language: ";
               if(empty($_POST['Language'])==false)
               {
                   for($i=0;$i<sizeof($_POST['Language']);$i++)
                   {
                        echo $_POST['Language'][$i].", ";
                   } 
                   echo "<br>";
               }
               else 
               {
                   echo "Not provided.";
               }
           ?>
       </p>

       <p>  
           <?php
               if(empty($_POST['comment'])==false)
                {
                     echo $_POST['comment'];
                }
                else
                {
                    echo "About: Not provided.";
                }
           ?>
       </p>

</html>