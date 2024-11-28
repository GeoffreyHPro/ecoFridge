import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class ScanCode extends StatefulWidget {
  const ScanCode({super.key});

  @override
  _ScanCode createState() => _ScanCode();
}

class _ScanCode extends State<ScanCode> {
  String _scanResult = "";

  Future<void> scanCode() async {
    String barcodeScanRes;
    try {
      barcodeScanRes = await FlutterBarcodeScanner.scanBarcode(
          "#ff6666", "Cancel", true, ScanMode.QR);
    } on PlatformException {
      barcodeScanRes = "Failed to scan";
    }

    if (!mounted) return;

    setState(() {
      _scanResult = barcodeScanRes;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: [
            const SizedBox(
              height: 250,
            ),
            Text(_scanResult)
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          scanCode();
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}