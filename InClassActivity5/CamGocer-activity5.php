<!DOCTYPE html>

<html lang="en">
<head>
    <title>Currency Calculation</title>
    <meta name="description" content="CENG 311 Inclass Activity 5" />

</head>

<body>

    <?php
    $exchange_rates = [
        'USD' => ['USD' => 1, 'CAD' => 1.43, 'EUR' => 0.93],
        'CAD' => ['USD' => 0.70, 'CAD' => 1, 'EUR' => 0.65],
        'EUR' => ['USD' => 1.08, 'CAD' => 1.53, 'EUR' => 1],
    ];

    $amount = isset($_GET['amount']) ? $_GET['amount'] : '';
    $from_currency = isset($_GET['from_currency']) ? substr($_GET['from_currency'], 1) : 'USD';
    $to_currency = isset($_GET['to_currency']) ? substr($_GET['to_currency'], 1) : 'USD';
    $converted_amount = '';

    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['amount'])) {
        if (isset($exchange_rates[$from_currency][$to_currency])) {
            $rate = $exchange_rates[$from_currency][$to_currency];
            $converted_amount = $amount * $rate;
        } else {
            $converted_amount = "Error.";
        }
    }
    ?>
    <form action = "CamGocer-activity5.php" method="GET">
        <table>
            <tr>
                <td>
                    From:
                </td>
                <td>
                    <input type="text" name="amount" value="<?php echo htmlspecialchars($amount); ?>" required/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="from_currency">
                        <option value="FUSD" <?php echo ($from_currency == 'USD') ? 'selected' : ''; ?>>USD</option>                        <option value="FCAD" <?php echo ($from_currency == 'CAD') ? 'selected' : ''; ?>>CAD</option>
                        <option value="FEUR" <?php echo ($from_currency == 'EUR') ? 'selected' : ''; ?>>EUR</option>
                    </select>
                </td>   
            </tr>
            <tr>
                <td>
                    To:
                </td>
                <td>
                    <input type="text" name="converted_amount" value="<?php echo htmlspecialchars($converted_amount); ?>" readonly/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="to_currency">
                        <option value="TUSD" <?php echo ($to_currency == 'USD') ? 'selected' : ''; ?>>USD</option>
                        <option value="TCAD" <?php echo ($to_currency == 'CAD') ? 'selected' : ''; ?>>CAD</option>
                        <option value="TEUR" <?php echo ($to_currency == 'EUR') ? 'selected' : ''; ?>>EUR</option>
                    </select>
                </td>   
            </tr>
                <tr>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    <input type="submit" value="convert"/>
                </td>   
            </tr>
        </table>
        
    </form>     
</body>