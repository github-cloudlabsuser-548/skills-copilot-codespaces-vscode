# Variables
$resourceGroupName = "MyResourceGroup"
$location = "East US"
$storageAccountName = "mystorageaccount" + $(Get-Random)
$storageSkuName = "Standard_LRS"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $storageSkuName `
                     -Kind "StorageV2" `
                     -AccessTier "Hot"

# Output the storage account name
Write-Host "Storage account '$storageAccountName' created successfully."