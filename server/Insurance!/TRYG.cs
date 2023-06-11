using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;
using static System.Net.Mime.MediaTypeNames;

using DotNetEnv;
using System.Threading;

// Load environment variables from .env file

// Access the value of the environment variable



namespace Insurance_
{
  public class TRYG
  {

    string a = "";
    string b = "";

    public Task<string> TrygReiseForsikring(string ssn)
    {
      // ChromeOptions options = new ChromeOptions();d
      // options.AddArgument("--no-sandbox");
      // options.BinaryLocation = "/usr/bin/google-chrome";
      IWebDriver driver = new ChromeDriver();
      WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10)); // wait up to 10 seconds

      driver.Navigate().GoToUrl("https://pris.tryg.no/index.html?execution=e1s2");

      ClickElement(driver, wait, GLABAL.a);
      ClickElement(driver, wait, GLABAL.b);
      ClickElement(driver, wait, GLABAL.c);
      ClickElement(driver, wait, GLABAL.d);
      TypeElement(driver, wait, GLABAL.e, ssn);
      DoubleClickElement(driver, wait, GLABAL.f);
      TypeElement(driver, wait, GLABAL.g, GLABAL.PostNummer);
      TypeElement(driver, wait, GLABAL.h, GLABAL.Adresse);
      TypeElement(driver, wait, GLABAL.i, Keys.Down + Keys.Down + Keys.Enter);

      IWebElement BoligType = wait.Until(driver => driver.FindElement(By.XPath(GLABAL.j)));
      BoligType.Click();
      BoligType.SendKeys(Keys.Down + Keys.Enter);

      ClickElement(driver, wait, GLABAL.k);
      ClickElement(driver, wait, GLABAL.l);

      IWebElement SkadeAntall = wait.Until(driver => driver.FindElement(By.XPath(GLABAL.m)));
      SkadeAntall.Click();
      SkadeAntall.SendKeys(Keys.Down + Keys.Enter);

      DoubleClickElement(driver, wait, GLABAL.n);
      ClickElement(driver, wait, GLABAL.o);
      TypeElement(driver, wait, GLABAL.p, GLABAL.ForsikringsBeløp);
      DoubleClickElement(driver, wait, GLABAL.q);
      ClickElement(driver, wait, GLABAL.q);
      ClickElement(driver, wait, GLABAL.r);
      DoubleClickElement(driver, wait, GLABAL.s);
      string ReisePris_Tryg = GetElementText(driver, wait, GLABAL.t);
      driver.Close();
      Console.WriteLine(ReisePris_Tryg);
      return Task.FromResult(ReisePris_Tryg);
    }



    public string GetInputFieldValue(IWebDriver driver, WebDriverWait wait, string xpath)
    {
      IWebElement inputField = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
      wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
      return inputField.GetAttribute("value");
    }


    public string GetElementText(IWebDriver driver, WebDriverWait wait, string xpath)
    {
      IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
      wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
      return element.Text;

    }


    public void ClickElement(IWebDriver driver, WebDriverWait wait, string xpath)
    {
      IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
      wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
      element.Click();
    }


    public void DoubleClickElement(IWebDriver driver, WebDriverWait wait, string xpath)
    {
      IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
      wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
      element.Click();
      Thread.Sleep(200);
      element.Click();
    }

    public void TypeElement(IWebDriver driver, WebDriverWait wait, string xpath, string text)
    {
      IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
      wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
      element.SendKeys(text);
    }

  }
}
