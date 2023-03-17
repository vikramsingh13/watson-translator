from setuptools import setup, find_packages

setup(
    name='translator',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'ibm-watson',
        'ibm-cloud-sdk-core',
    ],
    tests_require=[
        'unittest',
    ],
    test_suite='translator.tests',
)