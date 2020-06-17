// Zombie Land X - The doors to the department store are locked, the player must guess the three digit code before the undead eat the player
#include <iostream>
#include <ctime>
#include <string> 
using namespace std;

void PrintIntro()
{
    cout << "---------------------------------------------------------------------------\n";
    cout << "|       ________   _______  _________   ______   ___  _____    __         |\n";
    cout << "|       \\___   /  |  __  | |  _   _  | |  _  |  |  | |  ___|  |  |        |\n";
    cout << "|          /  /   | |  | | | | | | | | | |_| |  |  | | |___   |  |        |\n";
    cout << "|         /  /__  | |__| | | | | | | | | |_| |  |  | | |___   |__|        |\n";
    cout << "|        /______| |______| |_| |_| |_| |_____|  |__| |_____|   __         |\n";
    cout << "|                                                             |__|        |\n";
    cout << "---------------------------------------------------------------------------\n";

    cout << "\n";
    cout << "Zombie Land X!\n\n";
    cout << "John is trying to open the doors to the department store!\n";
    cout << "The doors are locked with a combination lock, you must figure out the unlock code before the Zombies eat you!\n";
}

void PrintGuesses(int Guesses)
{
cout << "\n";
cout << "You have " << Guesses << " guesses left!\n";
}

int NumberGenerator(int randomNumberSetter)
{
    const int LockCodeA = rand() % randomNumberSetter +randomNumberSetter; //makes random number 1-9, varible Difficulty comes from main
    const int LockCodeB = rand() % randomNumberSetter +randomNumberSetter; //makes random number 1-9, varible Difficulty comes from main
    const int LockCodeC = rand() % randomNumberSetter +randomNumberSetter; //makes random number 1-9, varible Difficulty comes from main
    string s1 = to_string(LockCodeA);
    string s2 = to_string(LockCodeB);
    string s3 = to_string(LockCodeC);
    string s4 = s1 + s2 + s3;
    int LockCode = stoi(s4);  
    return LockCode;
}

int HintGeneratorSum(int LockCode)
{
    string LockCodeString = to_string(LockCode);
    string a1 = LockCodeString.substr(0, 1);
    string a2 = LockCodeString.substr(1, 1);
    string a3 = LockCodeString.substr(2, 1);
    int a4 = stoi(a1);
    int a5 = stoi(a2);
    int a6 = stoi(a3);
    const int SumHint = a4 + a5 + a6;
    return SumHint;
}

int HintGeneratorProduct(int LockCode)
{
    string LockCodeString2 = to_string(LockCode);
    string p1 = LockCodeString2.substr(0, 1);
    string p2 = LockCodeString2.substr(1, 1);
    string p3 = LockCodeString2.substr(2, 1);
    int p4 = stoi(p1);
    int p5 = stoi(p2);
    int p6 = stoi(p3);
    const int ProductHint = p4 * p5 * p6;
    return ProductHint;
}

bool PlayGame(int Guesses, int randomNumberSetter, int Sum, int Product)
{
    PrintGuesses(Guesses);

    cout << "\n";
    cout << "+ There are three numbers in the lock code!\n";
    cout << "+ The codes add up to: " << Sum << "\n";
    cout << "+ The codes multiply to: " << Product << "\n";

    int PlayerGuess;

    cout << "\n";
    cout << "+ Enter a three digit guess!\n";
    cin >> PlayerGuess;
    cout << "+ You entered: " << PlayerGuess;
    cout << "\n";

    string BreakGuess = to_string(PlayerGuess);
    string g1 = BreakGuess.substr(0, 1);
    string g2 = BreakGuess.substr(1, 1);
    string g3 = BreakGuess.substr(2, 1);
    int g4 = stoi(g1);
    int g5 = stoi(g2);
    int g6 = stoi(g3);

    string BreakGuess1 = to_string(PlayerGuess);
    string m1 = BreakGuess1.substr(0, 1);
    string m2 = BreakGuess1.substr(1, 1);
    string m3 = BreakGuess1.substr(2, 1);
    int m4 = stoi(m1);
    int m5 = stoi(m2);
    int m6 = stoi(m3);

    int GuessSum = g4 + g5 + g6;
    int GuessProduct = m4 * m5 * m6;

    if (Sum == GuessSum && Product == GuessProduct)
    {
        std::cout << "Correct Guess, you have unlocked the doors! You can now plunder the department store!\n";
        return true;
    }
    else
    {
        std::cout << "Wrong Guess, the Zombies are getting closer!\n";
        return false;
    }
    
}

int main ()
{
    int randomNumberSetter = 3;
    int StartGuesses = 5;
    int LockCode;
    int Sum;
    int Product;
    srand(time(NULL)); //create new random sequence based on the time of day

    PrintIntro();
    LockCode = NumberGenerator(randomNumberSetter);
    Sum = HintGeneratorSum(LockCode);
    Product = HintGeneratorProduct(LockCode);

    while (StartGuesses != 0)
    {
        bool bLevelComplete = PlayGame(StartGuesses, randomNumberSetter, Sum, Product);
        cin.clear(); //clears any errors
        cin.ignore(); //discards the buffer

        if (bLevelComplete == false)
        {
            --StartGuesses;
        }

          if (bLevelComplete == true)
        {
            return 0;
        }
    }
         cout << "The Zombies have ripped your head off, you are Dead!\n";
         return 0;
}