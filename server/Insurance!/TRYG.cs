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
            bool staleElement = true;
            while (staleElement)
            {
                try
                {
                    wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
                    IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
                    element.Click();
                    Thread.Sleep(200);
                    element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
                    element.Click();
                    staleElement = false;
                }
                catch (StaleElementReferenceException e)
                {
                    staleElement = true;
                }
            }
        }



        public void TypeElement(IWebDriver driver, WebDriverWait wait, string xpath, string text)
        {
            IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
            element.SendKeys(text);
        }

        public void OneDown(IWebDriver driver, WebDriverWait wait, string xpath)
        {
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
            IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
            element.Click();
            element.SendKeys(Keys.Down + Keys.Enter);
        }



        public void TrygInnBo()
        {

            IWebDriver driver = new ChromeDriver();
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10)); // wait up to 10 seconds

            driver.Navigate().GoToUrl("https://pris.tryg.no/index.html?execution=e1s2");

            ClickElement(driver, wait, GLABAL.a);
            ClickElement(driver, wait, GLABAL.b);
            ClickElement(driver, wait, GLABAL.c);
            ClickElement(driver, wait, GLABAL.d);
            TypeElement(driver, wait, GLABAL.e, GLABAL.PersonNummer);
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
            //ClickElement(driver, wait, GLABAL.q);
            ClickElement(driver, wait, GLABAL.r);
            DoubleClickElement(driver, wait, GLABAL.s);
            string ReisePris_Tryg = GetElementText(driver, wait, GLABAL.t);
            Console.WriteLine(ReisePris_Tryg);

        }

        public void TrygReise()
        {
            IWebDriver driver = new ChromeDriver();
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10)); // wait up to 10 seconds

            driver.Navigate().GoToUrl("https://pris.tryg.no/index.html?execution=e1s2");
            ClickElement(driver, wait, GLABAL.a);

            ClickElement(driver, wait, GLABAL.aa);
            ClickElement(driver, wait, GLABAL.bb);
            ClickElement(driver, wait, GLABAL.cc);
            TypeElement(driver, wait, GLABAL.dd, GLABAL.PersonNummer);
            DoubleClickElement(driver, wait, GLABAL.ee);
            OneDown(driver, wait, GLABAL.ff);
            TypeElement(driver, wait, GLABAL.gg, GLABAL.FulltNavn);
            ClickElement(driver, wait, GLABAL.hh);
            DoubleClickElement(driver, wait, GLABAL.ii);
            DoubleClickElement(driver, wait, GLABAL.jj);
            //TRykk en ned




        }


        public string IF_Reise()
        {
            IWebDriver driver = new ChromeDriver();
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(20));
            driver.Navigate().GoToUrl("https://www.if.no/privat/forsikring/forsikringskalkulator");

            ClickElement(driver, wait, GLABAL.IfReise("A"));
            ClickElement(driver, wait, GLABAL.IfReise("B"));
            Thread.Sleep(2000);
            ClickElement(driver, wait, GLABAL.IfReise("C"));
            ClickElement(driver, wait, GLABAL.IfReise("D"));
            ClickElement(driver, wait, GLABAL.IfReise("E"));
            TypeElement(driver, wait, GLABAL.IfReise("F"), GLABAL.PersonNummer);
            TypeElement(driver, wait, GLABAL.IfReise("G"), GLABAL.ForNavn);
            TypeElement(driver, wait, GLABAL.IfReise("H"), GLABAL.EtterNavn);
            ClickElement(driver, wait, GLABAL.IfReise("I"));
            string ReisePris_If = GetElementTextt(driver, wait, GLABAL.IfReise("J"));
            Console.WriteLine(ReisePris_If);
            return ReisePris_If;
        }

        public string Frende_Reise()
        {
            IWebDriver driver = new ChromeDriver();
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            driver.Navigate().GoToUrl("https://www.frende.no/nettbutikk/");

            ClickElement(driver, wait, GLABAL.FrendeReise("A"));
            ClickElement(driver, wait, GLABAL.FrendeReise("B"));
            ClickElement(driver, wait, GLABAL.FrendeReise("C"));
            ClickElement(driver, wait, GLABAL.FrendeReise("D"));
            TypeElement(driver, wait, GLABAL.FrendeReise("E"), GLABAL.ForNavn);
            TypeElement(driver, wait, GLABAL.FrendeReise("F"), GLABAL.EtterNavn);
            TypeElement(driver, wait, GLABAL.FrendeReise("G"), GLABAL.PersonNummer);
            ClickElement(driver, wait, GLABAL.FrendeReise("H"));
            string ReisePris_Frende = GetInputFieldValue(driver, wait, GLABAL.FrendeReise("I"));
            Console.WriteLine(ReisePris_Frende);
            return ReisePris_Frende;

        }







        public string GetElementTextt(IWebDriver driver, WebDriverWait wait, string xpath)
        {
            IWebElement element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath(xpath)));
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath(xpath)));
            return element.GetAttribute("innerText");



        }
    }
}
