using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Company.Function
{
  public class Tryg
  {

    public void TrygForsikring()
    {
      //PEDER Prøvde seg
      // string currentDirectory = Directory.GetCurrentDirectory();
      // string chromeDriverPath = Path.Combine(currentDirectory, "chromedriver_linux64", "chromedriver");
      // Console.WriteLine(chromeDriverPath);
      // var chromeOptions = new ChromeOptions();
      // chromeOptions.AddArgument("--headless");  // Add any desired options
      // chromeOptions.BinaryLocation = chromeDriverPath;
      IWebDriver driver = new ChromeDriver();
      WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10)); // wait up to 10 seconds


      // Navigate to google.com
      driver.Navigate().GoToUrl("https://pris.tryg.no/index.html?execution=e1s2");
      System.Threading.Thread.Sleep(1000); // Wait for 5 seconds

      // Find the button with the specific XPath and click it
      IWebElement GodtaCookies = driver.FindElement(By.XPath("//*[@id=\"coiPage-1\"]/div[2]/button[2]"));
      GodtaCookies.Click();

      IWebElement BygningOgInnbo = driver.FindElement(By.XPath("/html/body/div[6]/div[2]/div[2]/div/div/div[2]/a/span[1]"));
      BygningOgInnbo.Click();

      IWebElement InnboForsikring = driver.FindElement(By.XPath("/html/body/div[6]/div[2]/div[2]/div/div/div[2]/div/div/ul/li[2]/a/span"));
      InnboForsikring.Click();

      IWebElement Nei = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/ul/div[1]/div[2]/div/label[2]"));
      Nei.Click();

      IWebElement FødselsNummerBox = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/ul/div[2]/input"));
      System.Threading.Thread.Sleep(2000);
      FødselsNummerBox.SendKeys("04029649117");

      IWebElement Neste = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div/input[1]"));
      Neste.Click();
      System.Threading.Thread.Sleep(200);
      Neste.Click();
      System.Threading.Thread.Sleep(1000);

      /////////////////////////////////////////////////////////////////////////////////////

      IWebElement PostNummer = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[1]/div[2]/input"));
      System.Threading.Thread.Sleep(1000);
      PostNummer.SendKeys("0579");

      IWebElement GateAdresse = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[1]/div[3]/input"));
      System.Threading.Thread.Sleep(1000);
      GateAdresse.SendKeys("Grenseveien 52");


      IWebElement Byggemåte = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[1]/select"));
      Byggemåte.Click();
      Byggemåte.SendKeys(Keys.Down + Keys.Down + Keys.Enter);
      System.Threading.Thread.Sleep(3000);


      //IWebElement Byggeår = wait.Until(driver => driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[3]/input")));
      //Byggeår.Click();
      //Byggeår.SendKeys("2007");



      IWebElement NO = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[5]/div[2]/div/label[2]"));
      NO.Click();

      IWebElement NEI = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[6]/div[2]/div/label[2]"));
      NEI.Click();

      IWebElement SkadeAntall = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[7]/select"));
      SkadeAntall.Click();
      SkadeAntall.SendKeys(Keys.Down + Keys.Enter);


      IWebElement NESTENESTE = driver.FindElement(By.XPath("/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[2]/div/input[2]"));
      NESTENESTE.Click();

      System.Threading.Thread.Sleep(200);
      Neste.Click();
    }
  }
}
