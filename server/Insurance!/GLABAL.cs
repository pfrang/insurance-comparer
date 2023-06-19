using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insurance_
{
  public class GLABAL
  {

    /// TRYGInnbo

    public static TimeSpan timeout = TimeSpan.FromSeconds(60);

    public static string a = "//*[@id=\"coiPage-1\"]/div[2]/button[2]";
    public static string b = "/html/body/div[6]/div[2]/div[2]/div/div/div[2]/a/span[1]";
    public static string c = "/html/body/div[6]/div[2]/div[2]/div/div/div[2]/div/div/ul/li[2]/a/span";
    public static string d = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/ul/div[1]/div[2]/div/label[2]";
    public static string e = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/ul/div[2]/input";
    public static string f = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div/input[1]";
    public static string g = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[1]/div[2]/input";
    public static string h = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[1]/div[3]/input";
    public static string i = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[1]/select";
    public static string j = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[2]/select";

    public static string k = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[5]/div[2]/div/label[2]";
    public static string l = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[6]/div[2]/div/label[2]";
    public static string m = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[7]/select";
    public static string n = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[2]/div/input[2]";

    public static string o = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[1]/ul/li/ul/div[1]/div[1]";
    public static string p = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[1]/ul/li/ul/div[2]/div[1]/input";
    public static string q = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[2]/div/input[2]";
    public static string r = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[1]/div[6]/div[2]/div/label[2]";
    public static string s = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[2]/div/input[2]";
    public static string t = "/html/body/div[6]/div[3]/div[2]/div/div[1]/div[5]/div[3]/div/span[3]";

    //TrygReise

    public static string aa = "/html/body/div[6]/div[2]/div[2]/div/div/div[3]/a/span[2]";
    public static string bb = "/html/body/div[6]/div[2]/div[2]/div/div/div[3]/div/div/ul/li[1]/a";
    public static string cc = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/ul/div[1]/div[2]/div/label[2]";
    public static string dd = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/ul/div[2]/input";
    public static string ee = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div/input[1]";
    public static string ff = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[1]/select";
    public static string gg = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[2]/input";
    public static string hh = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div[1]/div[1]/ul[2]/div[6]/div[3]/a[1]";
    public static string ii = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[2]/div/input[2]";
    public static string jj = "/html/body/div[6]/div[3]/div[2]/div/div[4]/form/div/div[2]/div/input[2]";
    public static string kk = "/html/body/div[6]/div[3]/div[2]/div/div[1]/div[5]/div[1]/div/div/span[2]";
    public static string IfReise(string a)
    {
      string Reise;
      switch (a)
      {
        case "A":
          Reise = "/html/body/div[2]/div[2]/div/div[1]/div/div[2]/div/button[2]";
          break;
        case "B":
          Reise = "/html/body/div[1]/main/div[1]/div/div[1]/ul/li[2]/button/p[2]";
          break;
        case "C":
          Reise = "/html/body/div[1]/main/div[1]/div/div[1]/ul/li[2]/div/div/ul/li[1]/a";
          break;
        case "D":
          Reise = "/html/body/div[1]/main/section[2]/div/div[1]/div/form/div[2]/section/fieldset/section[1]/fieldset/div[2]/div[3]/label/span";
          break;
        case "E":
          Reise = "/html/body/div[1]/main/section[2]/div/div[1]/div/form/div[2]/section/fieldset/section[1]/div/button";
          break;
        case "F":
          Reise = "/html/body/div[1]/main/section[2]/div/div[1]/div/form/div[2]/section/fieldset/section[2]/fieldset/ol/li[1]/login-input-text/div/div/input";
          break;
        case "G":
          Reise = "/html/body/div[1]/main/section[2]/div/div[1]/div/form/div[2]/section/fieldset/section[2]/fieldset/ol/li[2]/login-input-text/div/div/input";
          break;
        case "H":
          Reise = "/html/body/div[1]/main/section[2]/div/div[1]/div/form/div[2]/section/fieldset/section[2]/fieldset/ol/li[3]/login-input-text/div/div/input ";
          break;
        case "I":
          Reise = "/html/body/div[1]/main/section[2]/div/div[1]/div/form/div[2]/section/fieldset/section[2]/div/button";
          break;
        case "J":
          Reise = "/html/body/div[1]/main/div/form/section/article/div/product-compare-matrix/projection/div/div[3]/div/table[2]/thead/tr[2]/td[5]/div[2]";
          break;
        default:
          Reise = "";
          break;
      }
      return Reise;
    }

    public static string FrendeReise(string a)
    {
      string Reise;
      switch (a)
      {
        case "A":
          Reise = "/html/body/div[2]/div/div/div[3]/div[2]/a[1]";
          break;
        case "B":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/section/div[2]/div[3]/button";
          break;
        case "C":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/section/div[2]/div[3]/div/ul/li[1]/a/span";
          break;
        case "D":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/section/div[2]/button[2]";
          break;
        case "E":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/div/section/div[2]/div/div[1]/div[1]/div/input";
          break;
        case "F":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/div/section/div[2]/div/div[2]/div[1]/div/input";
          break;
        case "G":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/div/section/div[2]/div/div[3]/div[1]/div/input";
          break;
        case "H":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div/div/div[3]/button";
          break;
        case "I":
          Reise = "/html/body/div[4]/main/section/div/div/div/div/div[2]/div/div/section/div[1]/div/div/div/div[1]/div/fieldset/div[1]/div[1]/div[2]/span";
          break;

        default:
          Reise = "";
          break;
      }
      return Reise;
    }



    public static string PersonNummer = "04029649117";
    public static string PostNummer = "0579";
    public static string Adresse = "Grenseveien 52";
    public static string ForsikringsBeløp = "500000";
    public static string FulltNavn = "Stian Myran";
    public static string ForNavn = "Stian";
    public static string EtterNavn = "Myran";



  }
}
