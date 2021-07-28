#include<bits/stdc++.h>
using namespace std;

int main() {
	
	__int128 a1, b1;
	long long a, b;
	setlocale(LC_CTYPE, "rus");
	
	string flagAscii = "101 114 114 111 114 95 117 95 98 114 48 107 101 95 116 104 105 115 95 99 52 108 99 117 108 97 116 111 114 ";
	vector <char> flag;
	string st = "";
	for (int i = 0; i < flagAscii.size(); i++){
		if (flagAscii[i] != ' ') {
			st = st + flagAscii[i];
		}
		else {
			int k = atoi( st.c_str() );
			char c = (char) k;
			flag.push_back(c);
			st = "";
		}
	}	
	
	try {
		cout << "Это Калькулятор!" << endl << "Введите два числа, чтобы узнать их сумму:" << endl;
		cin >> a >> b;
		a1 = a;
		b1 = b;
		if (a1 + b1 > a + b) throw (a1 + b1);
		else throw (a + b);
	}
	catch (long long s){
		cout << endl << "Результат: " << s;
	}
	catch (int s){
		cout << endl << "Результат: " << s;
	}
	catch (__int128 s){
		cout << "ERROR: ";
		for(int i = 0; i < flag.size(); i++) cout<<flag[i];
		cout << endl << "Немедленно сообщите код ошибки разработчику!";
	}	
	
	long long qw = 0;	
	while (qw < 10000000) {
		qw ++;
	}
	
}
